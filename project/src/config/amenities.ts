import { 
  Wifi, 
  Car, 
  Coffee, 
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Heart, // Replace Spa with Heart
  ShoppingBag,
  Bath,
  Tv,
  Bed
} from 'lucide-react';
import { AmenityConfig } from '../types';

export const amenityConfig: AmenityConfig[] = [
  { 
    id: 'wifi',
    label: 'وای‌فای رایگان',
    icon: Wifi,
    hotelKey: 'وای‌فای رایگان'
  },
  { 
    id: 'swimming',
    label: 'استخر',
    icon: Waves,
    hotelKey: 'استخر'
  },
  { 
    id: 'parking',
    label: 'پارکینگ',
    icon: Car,
    hotelKey: 'پارکینگ'
  },
  { 
    id: 'restaurant',
    label: 'رستوران',
    icon: UtensilsCrossed,
    hotelKey: 'رستوران'
  },
  { 
    id: 'cafe',
    label: 'کافی‌شاپ',
    icon: Coffee,
    hotelKey: 'کافی‌شاپ'
  },
  { 
    id: 'gym',
    label: 'سالن ورزشی',
    icon: Dumbbell,
    hotelKey: 'سالن ورزشی'
  },
  { 
    id: 'spa',
    label: 'اسپا و ماساژ',
    icon: Heart,
    hotelKey: 'اسپا'
  },
  { 
    id: 'shopping',
    label: 'مرکز خرید',
    icon: ShoppingBag,
    hotelKey: 'مرکز خرید'
  },
  {
    id: 'bathroom',
    label: 'حمام مجهز',
    icon: Bath,
    hotelKey: 'حمام مجهز'
  },
  {
    id: 'tv',
    label: 'تلویزیون',
    icon: Tv,
    hotelKey: 'تلویزیون'
  },
  {
    id: 'kingbed',
    label: 'تخت کینگ',
    icon: Bed,
    hotelKey: 'تخت کینگ'
  }
];

export const getAmenityHotelKey = (amenityId: string): string => {
  const amenity = amenityConfig.find(a => a.id === amenityId);
  return amenity?.hotelKey || amenityId;
};

export const getAmenityIcon = (amenityId: string) => {
  const amenity = amenityConfig.find(a => a.id === amenityId);
  return amenity?.icon;
};

export const getAmenityLabel = (amenityId: string): string => {
  const amenity = amenityConfig.find(a => a.id === amenityId);
  return amenity?.label || amenityId;
};