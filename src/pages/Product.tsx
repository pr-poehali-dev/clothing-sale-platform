import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from '@/components/ui/icon';

const Product = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('id');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: 'Базовая футболка',
      price: 2990,
      images: [
        'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
      ],
      badge: 'Новинка',
      category: 'Топы',
      description: 'Классическая базовая футболка из 100% хлопка. Идеально подходит для повседневной носки и создания casual образов.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      material: '100% хлопок',
      care: 'Машинная стирка при 30°C'
    },
    {
      id: 2,
      name: 'Платье Summer',
      price: 5490,
      oldPrice: 7990,
      images: [
        'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/5acb302f-1338-4dd3-a0fe-5b6bfb667507.jpg',
      ],
      badge: 'Скидка -30%',
      category: 'Платья',
      description: 'Легкое летнее платье свободного кроя. Идеально для жарких дней и вечерних прогулок.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      material: 'Вискоза с добавлением эластана',
      care: 'Деликатная стирка, глажка при низкой температуре'
    },
    {
      id: 3,
      name: 'Джинсы Slim Fit',
      price: 4990,
      images: [
        'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/14cf4117-19da-4e62-bf01-3f0ce4189da1.jpg',
      ],
      badge: 'Хит',
      category: 'Джинсы',
      description: 'Стильные джинсы Slim Fit с идеальной посадкой. Изготовлены из качественного денима с добавлением эластана для комфорта.',
      sizes: ['28', '30', '32', '34', '36'],
      material: '98% хлопок, 2% эластан',
      care: 'Стирка при 40°C, не отбеливать'
    },
    {
      id: 4,
      name: 'Свитшот Oversize',
      price: 3990,
      images: [
        'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
      ],
      badge: 'Новинка',
      category: 'Свитшоты',
      description: 'Трендовый свитшот oversize для создания модных образов. Мягкий, теплый и невероятно комфортный.',
      sizes: ['S', 'M', 'L', 'XL'],
      material: '80% хлопок, 20% полиэстер',
      care: 'Машинная стирка при 30°C, сушка на горизонтальной поверхности'
    },
    {
      id: 5,
      name: 'Массажер для взрослых',
      price: 1990,
      images: [
        'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/d50f10d1-5dc0-434f-a693-2154b259dff4.jpg',
      ],
      badge: 'Хит',
      category: 'Для взрослых',
      description: 'Качественный массажер для релаксации. Изготовлен из гипоаллергенного материала. Водонепроницаемый дизайн.',
      sizes: ['Универсальный'],
      material: 'Медицинский силикон',
      care: 'Мыть теплой водой с мылом, хранить в сухом месте'
    }
  ];

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

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
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к каталогу
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {product.oldPrice} ₽
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Описание</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Размер</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите размер" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Количество</label>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button 
                  size="lg" 
                  className="w-full"
                  disabled={!selectedSize}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full"
                >
                  <Icon name="Heart" size={20} className="mr-2" />
                  В избранное
                </Button>
              </div>

              <Card className="bg-muted">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Package" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Бесплатная доставка</p>
                      <p className="text-sm text-muted-foreground">При заказе от 2500 ₽</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="RotateCcw" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Легкий возврат</p>
                      <p className="text-sm text-muted-foreground">14 дней на возврат</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="ShieldCheck" size={20} className="text-accent mt-1" />
                    <div>
                      <p className="font-semibold">Гарантия качества</p>
                      <p className="text-sm text-muted-foreground">Официальная гарантия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-semibold">Характеристики</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Материал:</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Уход:</span>
                    <span className="font-medium text-right max-w-xs">{product.care}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Категория:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Product;
