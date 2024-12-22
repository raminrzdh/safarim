import { Hotel } from '../../types';

export const tehranHotels: Hotel[] = [
  {
    id: 'teh-001',
    name: 'اسپیناس پالاس',
    description: 'هتل لوکس 5 ستاره در قلب تهران با معماری مدرن و خدمات برتر',
    city: 'تهران',
    rating: 4.8,
    price: 2500000,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    amenities: ['استخر', 'اسپا', 'رستوران', 'پارکینگ', 'وای‌فای رایگان'],
    location: { lat: 35.7219, lng: 51.3347 },
    status: 'best-seller',
    reviews: [
      { id: '1', userName: 'علی محمدی', rating: 5, comment: 'تجربه عالی', date: '1402/12/15' }
    ],
    facilities: ['لابی مجلل', 'رستوران بین‌المللی', 'سالن همایش']
  },
  {
    id: 'teh-002',
    name: 'پارسیان استقلال',
    description: 'هتل 5 ستاره با چشم‌انداز پانورامیک به شهر تهران',
    city: 'تهران',
    rating: 4.6,
    price: 2200000,
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    amenities: ['استخر', 'رستوران', 'پارکینگ'],
    location: { lat: 35.7312, lng: 51.3344 },
    status: 'special-offer',
    reviews: [],
    facilities: ['رستوران گردان', 'مرکز خرید']
  }
  // ... more Tehran hotels
];