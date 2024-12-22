import { Hotel } from '../types';

export const sortByPrice = (hotels: Hotel[], ascending: boolean = true): Hotel[] => {
  return [...hotels].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

export const sortByRating = (hotels: Hotel[]): Hotel[] => {
  return [...hotels].sort((a, b) => b.rating - a.rating);
};

export const sortByPopularity = (hotels: Hotel[]): Hotel[] => {
  const popularityOrder = {
    'best-seller': 4,
    'special-offer': 3,
    'last-rooms': 2,
    'new': 1
  };

  return [...hotels].sort((a, b) => {
    const aValue = a.status ? popularityOrder[a.status] || 0 : 0;
    const bValue = b.status ? popularityOrder[b.status] || 0 : 0;
    return bValue - aValue;
  });
};