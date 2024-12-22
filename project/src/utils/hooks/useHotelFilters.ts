import { useState, useEffect } from 'react';
import { Hotel } from '../../types';
import { filterByPriceRange, filterByRating, filterByAmenities } from '../hotelFilters';
import { sortByPrice, sortByRating } from '../hotelSorters';

interface UseHotelFiltersProps {
  initialHotels: Hotel[];
  searchQuery?: string;
  searchCity?: string;
}

export const useHotelFilters = ({ initialHotels, searchQuery, searchCity }: UseHotelFiltersProps) => {
  const [filters, setFilters] = useState({
    minPrice: Math.min(...initialHotels.map(h => h.price)),
    maxPrice: Math.max(...initialHotels.map(h => h.price)),
    currentMinPrice: Math.min(...initialHotels.map(h => h.price)),
    currentMaxPrice: Math.max(...initialHotels.map(h => h.price)),
    rating: 0,
    amenities: [],
    dates: [new Date(), new Date()] as [Date | null, Date | null],
    sortBy: 'recommended'
  });

  const [filteredHotels, setFilteredHotels] = useState(initialHotels);

  useEffect(() => {
    let result = initialHotels;

    // Apply search filters
    if (searchQuery || searchCity) {
      result = result.filter(hotel => {
        const matchesSearch = searchQuery 
          ? hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
          : true;
        const matchesCity = searchCity 
          ? hotel.city === searchCity 
          : true;
        return matchesSearch && matchesCity;
      });
    }

    // Apply price filter
    result = filterByPriceRange(result, filters.currentMinPrice, filters.currentMaxPrice);

    // Apply rating filter
    if (filters.rating > 0) {
      result = filterByRating(result, filters.rating);
    }

    // Apply amenities filter
    if (filters.amenities.length > 0) {
      result = filterByAmenities(result, filters.amenities);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result = sortByPrice(result, true);
        break;
      case 'price-desc':
        result = sortByPrice(result, false);
        break;
      case 'rating':
        result = sortByRating(result);
        break;
    }

    setFilteredHotels(result);
  }, [filters, searchQuery, searchCity, initialHotels]);

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return {
    filters,
    filteredHotels,
    handleFilterChange
  };
};