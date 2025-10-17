import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';
import { getFavorites, removeFromFavorites, type FavoriteItem } from '@/lib/cart';

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  const loadFavorites = () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
    loadFavorites();
    
    const handleFavoritesUpdate = () => loadFavorites();
    window.addEventListener('favorites-updated', handleFavoritesUpdate);
    
    return () => window.removeEventListener('favorites-updated', handleFavoritesUpdate);
  }, []);

  const handleRemove = (id: number) => {
    removeFromFavorites(id);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigate('/')} className="text-2xl font-bold tracking-tight">
              SHOPPHOP
            </button>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/cart')}>
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Избранное</h1>

          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="Heart" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-semibold mb-2">Список избранного пуст</h2>
              <p className="text-muted-foreground mb-6">Добавляйте товары, чтобы не потерять их</p>
              <Button onClick={() => navigate('/')}>
                Перейти к покупкам
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => navigate(`/product?id=${item.id}`)}
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-4 right-4 bg-white hover:bg-red-50"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Icon name="Heart" size={20} className="text-red-500 fill-red-500" />
                    </Button>
                    <Button 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size="sm"
                      onClick={() => navigate(`/product?id=${item.id}`)}
                    >
                      Подробнее
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                    <h3 
                      className="font-semibold mb-2 cursor-pointer hover:text-accent"
                      onClick={() => navigate(`/product?id=${item.id}`)}
                    >
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{item.price} ₽</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

export default Favorites;
