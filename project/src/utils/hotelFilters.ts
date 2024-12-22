import { Hotel } from '../types';

const amenityMapping = {
  'wifi': 'وای‌فای رایگان',
  'swimming': 'استخر',
  'parking': 'پارکینگ',
  'restaurant': 'رستوران',
  'cafe': 'کافی‌شاپ',
  'gym': 'سالن ورزشی',
  'spa': 'اسپا',
  'shopping': 'مرکز خرید'
};

export const filterByCity = (hotels: Hotel[], city?: string): Hotel[] => {
  if (!city) return hotels;
  return hotels.filter(hotel => hotel.city === city);
};

export const filterByPriceRange = (hotels: Hotel[], min?: number, max?: number): Hotel[] => {
  return hotels.filter(hotel => {
    if (min && hotel.price < min) return false;
    if (max && hotel.price > max) return false;
    return true;
  });
};

export const filterByRating = (hotels: Hotel[], minRating: number): Hotel[] => {
  return hotels.filter(hotel => hotel.rating >= minRating);
};

export const filterByAmenities = (hotels: Hotel[], amenities: string[]): Hotel[] => {
  if (!amenities.length) return hotels;
  return hotels.filter(hotel => 
    amenities.every(amenityId => 
      hotel.amenities.includes(amenityMapping[amenityId as keyof typeof amenityMapping])
    )
  );
};