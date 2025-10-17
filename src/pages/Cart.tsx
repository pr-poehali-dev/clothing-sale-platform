import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { 
  getCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  clearCart,
  getCartTotal,
  type CartItem 
} from '@/lib/cart';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const loadCart = () => {
    setCartItems(getCart());
  };

  useEffect(() => {
    loadCart();
    
    const handleCartUpdate = () => loadCart();
    window.addEventListener('cart-updated', handleCartUpdate);
    
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  const handleQuantityChange = (id: number, size: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateCartItemQuantity(id, size, newQuantity);
  };

  const handleRemove = (id: number, size: string) => {
    removeFromCart(id, size);
  };

  const handleClearCart = () => {
    if (confirm('Очистить всю корзину?')) {
      clearCart();
    }
  };

  const total = getCartTotal();

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate('/')} className="text-2xl font-bold tracking-tight">
              SHOPPHOP
            </button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/favorites')}>
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Корзина</h1>
            {cartItems.length > 0 && (
              <Button variant="ghost" onClick={handleClearCart}>
                <Icon name="Trash2" size={20} className="mr-2" />
                Очистить корзину
              </Button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="ShoppingBag" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Корзина пуста</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары, чтобы начать покупки</p>
              <Button onClick={() => navigate('/')}>
                Перейти к покупкам
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={`${item.id}-${item.size}`}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div 
                          className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                          onClick={() => navigate(`/product?id=${item.id}`)}
                        >
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 
                            className="font-semibold mb-1 cursor-pointer hover:text-accent"
                            onClick={() => navigate(`/product?id=${item.id}`)}
                          >
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">Размер: {item.size}</p>
                          <p className="text-lg font-bold">{item.price} ₽</p>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleRemove(item.id, item.size)}
                          >
                            <Icon name="X" size={20} />
                          </Button>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                            >
                              <Icon name="Minus" size={14} />
                            </Button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                            >
                              <Icon name="Plus" size={14} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">Итого</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Товары ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                        <span className="font-semibold">{total} ₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Доставка</span>
                        <span className="font-semibold">
                          {total >= 2500 ? 'Бесплатно' : '300 ₽'}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xl font-bold">Сумма</span>
                        <span className="text-2xl font-bold">
                          {total >= 2500 ? total : total + 300} ₽
                        </span>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      Оформить заказ
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>

                    {total < 2500 && (
                      <p className="text-sm text-muted-foreground text-center">
                        Добавьте товаров на {2500 - total} ₽ для бесплатной доставки
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">&copy; 2024 SHOPPHOP. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
