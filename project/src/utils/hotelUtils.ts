import { hotels } from '../data/hotels';
import { Hotel } from '../types';
import { filterByRating } from './hotelFilters';
import { sortByPopularity } from './hotelSorters';

export const getCities = (): string[] => {
  return [...new Set(hotels.map(hotel => hotel.city))];
};

export const getTopHotels = (): Hotel[] => {
  return filterByRating(hotels, 4.7);
};

export const getPopularHotels = (): Hotel[] => {
  return sortByPopularity(hotels).slice(0, 6);
};

export const getEarlyBirdDeals = (): Hotel[] => {
  return hotels.filter(hotel => hotel.status === 'special-offer');
};

export const getLastMinuteDeals = (): Hotel[] => {
  return hotels.filter(hotel => hotel.status === 'last-rooms');
};