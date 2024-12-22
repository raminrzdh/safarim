import { Hotel } from '../../types';

export const filterByRating = (
  hotels: Hotel[],
  minRating: number
): Hotel[] => {
  return hotels.filter(hotel => hotel.rating >= minRating);
};