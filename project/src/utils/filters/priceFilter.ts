import { Hotel } from '../../types';

export const filterByPriceRange = (
  hotels: Hotel[],
  min?: number,
  max?: number
): Hotel[] => {
  return hotels.filter(hotel => {
    if (min && hotel.price < min) return false;
    if (max && hotel.price > max) return false;
    return true;
  });
};