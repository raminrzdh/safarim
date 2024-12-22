import { Hotel } from '../../types';

export const isfahanHotels: Hotel[] = [
  {
    id: 'isf-001',
    name: 'عباسی',
    description: 'قدیمی‌ترین هتل خاورمیانه با معماری تاریخی',
    city: 'اصفهان',
    rating: 4.9,
    price: 2800000,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    amenities: ['رستوران سنتی', 'کافی‌شاپ', 'پارکینگ'],
    location: { lat: 32.6539, lng: 51.6660 },
    status: 'best-seller',
    reviews: [],
    facilities: ['باغ تاریخی', 'گالری صنایع دستی']
  },
  {
    id: 'isf-002',
    name: 'کوثر',
    description: 'هتل مدرن در مرکز شهر اصفهان',
    city: 'اصفهان',
    rating: 4.5,
    price: 1800000,
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    amenities: ['استخر', 'رستوران', 'پارکینگ'],
    location: { lat: 32.6547, lng: 51.6680 },
    status: 'special-offer',
    reviews: [],
    facilities: ['مرکز تجاری', 'سالن کنفرانس']
  }
  // ... more Isfahan hotels
];