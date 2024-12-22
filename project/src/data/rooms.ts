import { Room } from '../types';

export const rooms: Room[] = [
  {
    id: '1-1',
    hotelId: '1',
    name: 'اتاق دو تخته دلوکس',
    description: 'اتاق لوکس با منظره شهر و امکانات کامل',
    capacity: 2,
    price: 2800000,
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    amenities: ['مینی‌بار', 'سرویس اتاق ۲۴ ساعته', 'تلویزیون', 'حمام مجهز'],
    type: 'دلوکس',
    bedType: 'یک تخت دو نفره کینگ',
    size: 35,
    view: 'منظره شهر'
  },
  {
    id: '1-2',
    hotelId: '1',
    name: 'سوئیت خانوادگی',
    description: 'سوئیت بزرگ مناسب خانواده با آشپزخانه کوچک',
    capacity: 4,
    price: 4500000,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    amenities: ['آشپزخانه', 'بالکن', 'اتاق نشیمن جدا', 'دو سرویس بهداشتی'],
    type: 'سوئیت',
    bedType: 'دو تخت دو نفره کوئین',
    size: 65,
    view: 'منظره پانوراما'
  },
  {
    id: '1-3',
    hotelId: '1',
    name: 'اتاق اجرایی',
    description: 'اتاق مجهز برای مسافران تجاری با میز کار',
    capacity: 2,
    price: 3200000,
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
    amenities: ['میز کار', 'گاوصندوق', 'اینترنت پرسرعت', 'قهوه‌ساز'],
    type: 'اجرایی',
    bedType: 'یک تخت دو نفره کوئین',
    size: 40,
    view: 'منظره شهر'
  }
];