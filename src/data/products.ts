export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  category: string;
  description: string;
  sizes: string[];
  material: string;
  care: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Базовая футболка',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
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
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/5acb302f-1338-4dd3-a0fe-5b6bfb667507.jpg',
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
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/14cf4117-19da-4e62-bf01-3f0ce4189da1.jpg',
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
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
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
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/d50f10d1-5dc0-434f-a693-2154b259dff4.jpg',
    badge: 'Хит',
    category: 'Для взрослых',
    description: 'Качественный массажер для релаксации. Изготовлен из гипоаллергенного материала. Водонепроницаемый дизайн.',
    sizes: ['Универсальный'],
    material: 'Медицинский силикон',
    care: 'Мыть теплой водой с мылом, хранить в сухом месте'
  },
  {
    id: 6,
    name: 'Худи Premium',
    price: 5990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/da2cf214-e042-4b9d-9d53-6d473e7c8462.jpg',
    badge: 'Новинка',
    category: 'Худи',
    description: 'Стильная худи премиум качества с удобным капюшоном. Отличный выбор для прохладной погоды.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '85% хлопок, 15% полиэстер',
    care: 'Машинная стирка при 30°C'
  },
  {
    id: 7,
    name: 'Куртка кожаная',
    price: 12990,
    oldPrice: 15990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/ad8f72fa-b46a-4d77-aa09-a74c1391da50.jpg',
    badge: 'Скидка -20%',
    category: 'Верхняя одежда',
    description: 'Классическая кожаная куртка из натуральной кожи. Вневременной дизайн и превосходное качество.',
    sizes: ['S', 'M', 'L', 'XL'],
    material: '100% натуральная кожа',
    care: 'Профессиональная чистка'
  },
  {
    id: 8,
    name: 'Кроссовки белые',
    price: 6990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/ceebf1d7-68f5-4234-9c0a-a6d941a8c573.jpg',
    badge: 'Хит',
    category: 'Обувь',
    description: 'Универсальные белые кроссовки для повседневной носки. Удобные и стильные.',
    sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
    material: 'Синтетика, текстиль',
    care: 'Протирать влажной тканью'
  },
  {
    id: 9,
    name: 'Рубашка классическая',
    price: 3490,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
    category: 'Рубашки',
    description: 'Элегантная классическая рубашка для офиса и особых случаев.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    material: '100% хлопок',
    care: 'Глажка при средней температуре'
  },
  {
    id: 10,
    name: 'Юбка миди',
    price: 2990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/5acb302f-1338-4dd3-a0fe-5b6bfb667507.jpg',
    badge: 'Новинка',
    category: 'Юбки',
    description: 'Стильная юбка миди для создания женственных образов.',
    sizes: ['XS', 'S', 'M', 'L'],
    material: 'Полиэстер',
    care: 'Ручная стирка'
  },
  {
    id: 11,
    name: 'Брюки классические',
    price: 4490,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/14cf4117-19da-4e62-bf01-3f0ce4189da1.jpg',
    category: 'Брюки',
    description: 'Классические брюки со стрелками для офисного дресс-кода.',
    sizes: ['44', '46', '48', '50', '52'],
    material: 'Шерсть с полиэстером',
    care: 'Сухая чистка'
  },
  {
    id: 12,
    name: 'Пальто шерстяное',
    price: 14990,
    oldPrice: 19990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/ad8f72fa-b46a-4d77-aa09-a74c1391da50.jpg',
    badge: 'Скидка -25%',
    category: 'Верхняя одежда',
    description: 'Элегантное шерстяное пальто для холодного сезона.',
    sizes: ['S', 'M', 'L'],
    material: '70% шерсть, 30% полиэстер',
    care: 'Профессиональная чистка'
  },
  {
    id: 13,
    name: 'Шорты спортивные',
    price: 1990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/14cf4117-19da-4e62-bf01-3f0ce4189da1.jpg',
    category: 'Спорт',
    description: 'Удобные спортивные шорты для тренировок и активного отдыха.',
    sizes: ['S', 'M', 'L', 'XL'],
    material: 'Полиэстер с эластаном',
    care: 'Машинная стирка при 40°C'
  },
  {
    id: 14,
    name: 'Топ базовый',
    price: 1490,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/6c4bbabc-911d-4e0f-92df-c9ebc1256c50.jpg',
    badge: 'Новинка',
    category: 'Топы',
    description: 'Базовый топ для создания многослойных образов.',
    sizes: ['XS', 'S', 'M', 'L'],
    material: '95% хлопок, 5% эластан',
    care: 'Машинная стирка при 30°C'
  },
  {
    id: 15,
    name: 'Сумка кожаная',
    price: 7990,
    image: 'https://cdn.poehali.dev/projects/5eb67637-dcb7-4d72-a568-6fc27ce813c3/files/ad8f72fa-b46a-4d77-aa09-a74c1391da50.jpg',
    badge: 'Хит',
    category: 'Аксессуары',
    description: 'Вместительная кожаная сумка для повседневного использования.',
    sizes: ['Универсальный'],
    material: 'Натуральная кожа',
    care: 'Протирать специальными средствами'
  }
];
