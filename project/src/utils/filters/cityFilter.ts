import { Hotel } from '../../types';

export const filterByCity = (
  hotels: Hotel[],
  city?: string
): Hotel[] => {
  if (!city) return hotels;
  return hotels.filter(hotel => hotel.city === city);
};