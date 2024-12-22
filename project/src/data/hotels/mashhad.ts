import { Hotel } from '../../types';

export const mashhadHotels: Hotel[] = [
  {
    id: 'mhd-001',
    name: 'درویشی رویال',
    description: 'هتل 5 ستاره با موقعیت عالی در نزدیکی حرم مطهر',
    city: 'مشهد',
    rating: 4.9,
    price: 3200000,
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
    amenities: ['استخر', 'اسپا', 'رستوران', 'پارکینگ'],
    location: { lat: 36.2875, lng: 59.6159 },
    status: 'best-seller',
    reviews: [],
    facilities: ['نمازخانه', 'رستوران', 'خدمات حمل و نقل']
  },
  {
    id: 'mhd-002',
    name: 'قصر طلایی',
    description: 'هتل لوکس با دسترسی عالی به حرم مطهر',
    city: 'مشهد',
    rating: 4.7,
    price: 2800000,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    amenities: ['رستوران', 'پارکینگ', 'وای‌فای رایگان'],
    location: { lat: 36.2888, lng: 59.6151 },
    status: 'last-rooms',
    reviews: [],
    facilities: ['صبحانه رایگان', 'ترانسفر فرودگاهی']
  }
  // ... more Mashhad hotels
];