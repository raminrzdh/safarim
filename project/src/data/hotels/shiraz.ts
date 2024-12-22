import { Hotel } from '../../types';

export const shirazHotels: Hotel[] = [
  {
    id: 'shrz-001',
    name: 'زندیه',
    description: 'هتل 5 ستاره با معماری سنتی شیرازی',
    city: 'شیراز',
    rating: 4.8,
    price: 2600000,
    imageUrl: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864',
    amenities: ['استخر', 'اسپا', 'رستوران سنتی'],
    location: { lat: 29.6316, lng: 52.5319 },
    status: 'special-offer',
    reviews: [],
    facilities: ['باغ ایرانی', 'چایخانه سنتی']
  },
  {
    id: 'shrz-002',
    name: 'چمران',
    description: 'هتل لوکس با چشم‌انداز پانورامیک به شهر شیراز',
    city: 'شیراز',
    rating: 4.7,
    price: 2200000,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    amenities: ['استخر', 'رستوران', 'پارکینگ'],
    location: { lat: 29.6320, lng: 52.5315 },
    status: 'new',
    reviews: [],
    facilities: ['رستوران گردان', 'تراس روف‌تاپ']
  }
  // ... more Shiraz hotels
];