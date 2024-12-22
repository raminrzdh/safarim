import { Hotel } from '../../types';

export const kishHotels: Hotel[] = [
  {
    id: 'ksh-001',
    name: 'دریایی ترنج',
    description: 'ریزورت لوکس ساحلی با امکانات تفریحی کامل',
    city: 'کیش',
    rating: 4.9,
    price: 3500000,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    amenities: ['ساحل اختصاصی', 'اسپا', 'ورزش‌های آبی'],
    location: { lat: 26.5321, lng: 53.9800 },
    status: 'best-seller',
    reviews: [],
    facilities: ['مرکز غواصی', 'تفریحات دریایی']
  },
  {
    id: 'ksh-002',
    name: 'شایگان',
    description: 'هتل ساحلی با منظره دریا',
    city: 'کیش',
    rating: 4.6,
    price: 2800000,
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    amenities: ['استخر', 'رستوران', 'ساحل'],
    location: { lat: 26.5324, lng: 53.9795 },
    status: 'special-offer',
    reviews: [],
    facilities: ['ورزش‌های ساحلی', 'کافه ساحلی']
  }
  // ... more Kish hotels
];