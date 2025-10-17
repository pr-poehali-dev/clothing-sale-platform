export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const CART_STORAGE_KEY = 'shopphop_cart';
const FAVORITES_STORAGE_KEY = 'shopphop_favorites';

export const getCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: CartItem[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event('cart-updated'));
};

export const addToCart = (item: CartItem): void => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(
    (i) => i.id === item.id && i.size === item.size
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

export const removeFromCart = (id: number, size: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => !(item.id === id && item.size === size));
  saveCart(updatedCart);
};

export const updateCartItemQuantity = (id: number, size: string, quantity: number): void => {
  const cart = getCart();
  const item = cart.find((i) => i.id === id && i.size === size);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartTotal = (): number => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartCount = (): number => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};

export const getFavorites = (): FavoriteItem[] => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites: FavoriteItem[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  window.dispatchEvent(new Event('favorites-updated'));
};

export const addToFavorites = (item: FavoriteItem): void => {
  const favorites = getFavorites();
  const exists = favorites.some((i) => i.id === item.id);
  
  if (!exists) {
    favorites.push(item);
    saveFavorites(favorites);
  }
};

export const removeFromFavorites = (id: number): void => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter((item) => item.id !== id);
  saveFavorites(updatedFavorites);
};

export const isFavorite = (id: number): boolean => {
  const favorites = getFavorites();
  return favorites.some((item) => item.id === id);
};

export const toggleFavorite = (item: FavoriteItem): boolean => {
  if (isFavorite(item.id)) {
    removeFromFavorites(item.id);
    return false;
  } else {
    addToFavorites(item);
    return true;
  }
};
