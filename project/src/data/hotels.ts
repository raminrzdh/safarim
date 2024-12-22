import { Hotel } from '../types';

export const hotels: Hotel[] = [
  {
    id: '1',
    name: 'اسپیناس پالاس',
    description: 'هتل لوکس 5 ستاره در قلب تهران با معماری مدرن و خدمات برتر',
    city: 'تهران',
    rating: 4.8,
    price: 2500000,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    amenities: ['استخر', 'اسپا', 'رستوران', 'پارکینگ', 'وای‌فای رایگان'],
    location: {
      lat: 35.7219,
      lng: 51.3347
    },
    status: 'best-seller',
    reviews: [
      {
        id: '1',
        userName: 'علی محمدی',
        rating: 5,
        comment: 'تجربه اقامت فوق‌العاده‌ای داشتیم. کارکنان بسیار مؤدب و حرفه‌ای بودند.',
        date: '1402/12/15'
      },
      {
        id: '2',
        userName: 'مریم حسینی',
        rating: 4.5,
        comment: 'اتاق‌ها تمیز و مرتب بودند. صبحانه متنوع و خوشمزه.',
        date: '1402/12/10'
      }
    ],
    facilities: [
      'لابی مجلل',
      'رستوران بین‌المللی',
      'کافی‌شاپ',
      'سالن ورزشی',
      'سالن همایش',
      'خدمات اتاق ۲۴ ساعته',
      'پارکینگ اختصاصی',
      'صرافی',
      'خشکشویی'
    ]
  },
  {
    id: '5',
    name: 'هتل پارسیان آزادی مشهد',
    description: 'هتل 5 ستاره با موقعیت عالی در نزدیکی حرم مطهر',
    city: 'مشهد',
    rating: 4.7,
    price: 1800000,
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80',
    amenities: ['استخر', 'رستوران', 'پارکینگ', 'وای‌فای رایگان'],
    location: {
      lat: 36.2875,
      lng: 59.6159
    },
    status: 'special-offer',
    reviews: [
      {
        id: '9',
        userName: 'حسین رضایی',
        rating: 4.5,
        comment: 'دسترسی عالی به حرم، خدمات خوب',
        date: '1402/12/01'
      }
    ],
    facilities: [
      'نمازخانه',
      'رستوران',
      'کافی‌شاپ',
      'خدمات حمل و نقل',
      'صندوق امانات',
      'خدمات اتاق'
    ]
  },
  {
    id: '6',
    name: 'هتل چمران شیراز',
    description: 'هتل لوکس با چشم‌انداز پانورامیک به شهر شیراز',
    city: 'شیراز',
    rating: 4.6,
    price: 1600000,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    amenities: ['استخر', 'اسپا', 'رستوران', 'پارکینگ'],
    location: {
      lat: 29.6316,
      lng: 52.5319
    },
    status: 'new',
    reviews: [
      {
        id: '10',
        userName: 'فاطمه کریمی',
        rating: 4.8,
        comment: 'منظره فوق‌العاده، پرسنل مهمان‌نواز',
        date: '1402/11/25'
      }
    ],
    facilities: [
      'رستوران گردان',
      'مرکز خرید',
      'سالن زیبایی',
      'باشگاه ورزشی',
      'خدمات گردشگری'
    ]
  }
  // ... existing hotels ...
];