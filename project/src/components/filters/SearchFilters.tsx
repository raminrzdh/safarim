import React from 'react';
import { PriceRangeSlider } from './PriceRangeSlider';
import { RatingFilter } from './RatingFilter';
import { AmenitiesFilter } from './AmenitiesFilter';
import { DateRangePicker } from '../DateRangePicker';

interface SearchFiltersProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    currentMinPrice: number;
    currentMaxPrice: number;
    rating: number;
    amenities: string[];
    dates: [Date | null, Date | null];
  };
  onFilterChange: (key: string, value: any) => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <DateRangePicker
        startDate={filters.dates[0]}
        endDate={filters.dates[1]}
        onChange={(dates) => onFilterChange('dates', dates)}
      />

      <div className="border-t pt-6">
        <PriceRangeSlider
          minPrice={filters.minPrice}
          maxPrice={filters.maxPrice}
          currentMin={filters.currentMinPrice}
          currentMax={filters.currentMaxPrice}
          onChange={(min, max) => {
            onFilterChange('currentMinPrice', min);
            onFilterChange('currentMaxPrice', max);
          }}
        />
      </div>

      <div className="border-t pt-6">
        <RatingFilter
          selectedRating={filters.rating}
          onChange={(rating) => onFilterChange('rating', rating)}
        />
      </div>

      <div className="border-t pt-6">
        <AmenitiesFilter
          selectedAmenities={filters.amenities}
          onChange={(amenities) => onFilterChange('amenities', amenities)}
        />
      </div>
    </div>
  );
};