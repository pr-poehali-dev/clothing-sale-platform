import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Базовая футболка',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
      badge: 'Новинка',
      category: 'Топы'
    },
    {
      id: 2,
      name: 'Платье Summer',
      price: 5490,
      oldPrice: 7990,
      image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/5acb302f-1338-4dd3-a0fe-5b6bfb667507.jpg',
      badge: 'Скидка -30%',
      category: 'Платья'
    },
    {
      id: 3,
      name: 'Джинсы Slim Fit',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/14cf4117-19da-4e62-bf01-3f0ce4189da1.jpg',
      badge: 'Хит',
      category: 'Джинсы'
    },
    {
      id: 4,
      name: 'Свитшот Oversize',
      price: 3990,
      image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
      badge: 'Новинка',
      category: 'Свитшоты'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold tracking-tight">SHOPPHOP</div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Каталог
              </button>
              <button 
                onClick={() => scrollToSection('new')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Новинки
              </button>
              <button 
                onClick={() => scrollToSection('sale')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Распродажа
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                О бренде
              </button>
              <button 
                onClick={() => scrollToSection('delivery')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Доставка
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    <button onClick={() => scrollToSection('home')} className="text-left text-lg font-medium">Главная</button>
                    <button onClick={() => scrollToSection('catalog')} className="text-left text-lg font-medium">Каталог</button>
                    <button onClick={() => scrollToSection('new')} className="text-left text-lg font-medium">Новинки</button>
                    <button onClick={() => scrollToSection('sale')} className="text-left text-lg font-medium">Распродажа</button>
                    <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium">О бренде</button>
                    <button onClick={() => scrollToSection('delivery')} className="text-left text-lg font-medium">Доставка</button>
                    <button onClick={() => scrollToSection('contacts')} className="text-left text-lg font-medium">Контакты</button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgMGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Новая коллекция 2024</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Стиль без границ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Откройте для себя уникальные вещи, которые подчеркнут вашу индивидуальность
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection('catalog')}>
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('sale')}>
                Распродажа -50%
              </Button>
            </div>
          </div>
        </section>

        <section id="new" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Новинки</h2>
              <p className="text-muted-foreground text-lg">Самые свежие поступления этой недели</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    <Button 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size="sm"
                    >
                      Быстрый просмотр
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">{product.price} ₽</span>
                      {product.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.oldPrice} ₽</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="catalog" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Каталог</h2>
              <p className="text-muted-foreground text-lg">Все категории в одном месте</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Футболки', 'Платья', 'Джинсы', 'Верхняя одежда', 'Обувь', 'Аксессуары', 'Сумки', 'Украшения'].map((category) => (
                <Card key={category} className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-accent">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon name="Package" size={32} className="text-accent" />
                    </div>
                    <h3 className="font-semibold">{category}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="sale" className="py-20 bg-gradient-to-r from-accent to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Распродажа до -50%</h2>
            <p className="text-xl mb-8 opacity-90">Успей купить любимые вещи по суперценам</p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Перейти к товарам
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="sizes" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Таблица размеров</h2>
              <p className="text-muted-foreground text-lg">Найдите свой идеальный размер</p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Женская одежда</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-gray-300 p-3 text-left">Размер</th>
                      <th className="border border-gray-300 p-3 text-left">Россия</th>
                      <th className="border border-gray-300 p-3 text-left">Грудь (см)</th>
                      <th className="border border-gray-300 p-3 text-left">Талия (см)</th>
                      <th className="border border-gray-300 p-3 text-left">Бедра (см)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">XS</td>
                      <td className="border border-gray-300 p-3">40-42</td>
                      <td className="border border-gray-300 p-3">82-86</td>
                      <td className="border border-gray-300 p-3">62-66</td>
                      <td className="border border-gray-300 p-3">88-92</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-gray-300 p-3">S</td>
                      <td className="border border-gray-300 p-3">44</td>
                      <td className="border border-gray-300 p-3">86-90</td>
                      <td className="border border-gray-300 p-3">66-70</td>
                      <td className="border border-gray-300 p-3">92-96</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">M</td>
                      <td className="border border-gray-300 p-3">46-48</td>
                      <td className="border border-gray-300 p-3">90-94</td>
                      <td className="border border-gray-300 p-3">70-74</td>
                      <td className="border border-gray-300 p-3">96-100</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-gray-300 p-3">L</td>
                      <td className="border border-gray-300 p-3">50</td>
                      <td className="border border-gray-300 p-3">94-98</td>
                      <td className="border border-gray-300 p-3">74-78</td>
                      <td className="border border-gray-300 p-3">100-104</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">XL</td>
                      <td className="border border-gray-300 p-3">52-54</td>
                      <td className="border border-gray-300 p-3">98-104</td>
                      <td className="border border-gray-300 p-3">78-84</td>
                      <td className="border border-gray-300 p-3">104-110</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Info" size={24} className="mr-2 text-accent" />
                  Рекомендации по выбору размера
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как правильно снять мерки?</AccordionTrigger>
                    <AccordionContent>
                      Для точного определения размера используйте сантиметровую ленту. Измеряйте обхват груди по самым выступающим точкам, талию по самому узкому месту, бедра по самым широким точкам. Измерения проводите на нижнем белье.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Что делать, если размер между двумя?</AccordionTrigger>
                    <AccordionContent>
                      Если ваши параметры находятся между двумя размерами, рекомендуем выбрать больший размер для свободного кроя или меньший для облегающей посадки. Обратите внимание на состав ткани - материалы с эластаном лучше тянутся.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Особенности посадки разных моделей</AccordionTrigger>
                    <AccordionContent>
                      Oversize модели: выбирайте на 1-2 размера больше обычного. Slim Fit: выбирайте привычный размер, крой облегающий. Regular Fit: стандартная посадка, выбирайте свой размер. В описании каждого товара указаны особенности кроя.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">О бренде</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SHOPPHOP — это современный бренд одежды, который создает уникальные коллекции для тех, кто ценит стиль и комфорт. 
              Мы верим, что мода должна быть доступной каждому, поэтому предлагаем качественные вещи по честным ценам.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Качество</h3>
                <p className="text-sm text-muted-foreground">Только лучшие ткани и фурнитура</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Стиль</h3>
                <p className="text-sm text-muted-foreground">Актуальные тренды и классика</p>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Smile" size={32} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Комфорт</h3>
                <p className="text-sm text-muted-foreground">Удобство в каждой детали</p>
              </div>
            </div>
          </div>
        </section>

        <section id="delivery" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Доставка и оплата</h2>
              <p className="text-muted-foreground text-lg">Удобные способы получения заказа</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Курьером</h3>
                  <p className="text-muted-foreground mb-3">Доставка по Москве 1-2 дня</p>
                  <p className="font-semibold">от 300 ₽</p>
                  <p className="text-sm text-muted-foreground">Бесплатно от 3000 ₽</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Пункт выдачи</h3>
                  <p className="text-muted-foreground mb-3">Более 5000 пунктов по России</p>
                  <p className="font-semibold">от 200 ₽</p>
                  <p className="text-sm text-muted-foreground">Бесплатно от 2500 ₽</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Способы оплаты</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="CreditCard" size={24} className="text-accent" />
                    <span>Банковская карта</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Wallet" size={24} className="text-accent" />
                    <span>Электронные кошельки</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Banknote" size={24} className="text-accent" />
                    <span>Наличные курьеру</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Мы всегда на связи</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground mt-1">Пн-Вс 9:00-21:00</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@fashion-store.ru</p>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение 24 часов</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Мессенджеры</h3>
                  <p className="text-muted-foreground">WhatsApp, Telegram</p>
                  <p className="text-sm text-muted-foreground mt-1">Быстрая связь онлайн</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SHOPPHOP</h3>
              <p className="text-sm opacity-80">Стиль без границ</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Покупателям</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('delivery')}>Доставка</button></li>
                <li><button onClick={() => scrollToSection('sizes')}>Таблица размеров</button></li>
                <li><a href="#">Возврат и обмен</a></li>
                <li><a href="#">Оплата</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><button onClick={() => scrollToSection('about')}>О нас</button></li>
                <li><button onClick={() => scrollToSection('contacts')}>Контакты</button></li>
                <li><a href="#">Вакансии</a></li>
                <li><a href="#">Партнерам</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Следите за нами</h4>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-80">
            <p>&copy; 2024 SHOPPHOP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;