import React from 'react';
import { amenityConfig } from '../../config/amenities';
import { AmenityId } from '../../types';
import { AmenityIcon } from '../amenities/AmenityIcon';

interface AmenitiesFilterProps {
  selectedAmenities: AmenityId[];
  onChange: (amenities: AmenityId[]) => void;
}

export const AmenitiesFilter: React.FC<AmenitiesFilterProps> = ({
  selectedAmenities,
  onChange,
}) => {
  const toggleAmenity = (amenityId: AmenityId) => {
    const newSelection = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(id => id !== amenityId)
      : [...selectedAmenities, amenityId];
    onChange(newSelection);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">امکانات هتل</h3>
      <div className="grid grid-cols-2 gap-2">
        {amenityConfig.map(({ id, label }) => (
          <label
            key={id}
            className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedAmenities.includes(id) ? 'bg-blue-50' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={selectedAmenities.includes(id)}
              onChange={() => toggleAmenity(id)}
              className="ml-2"
            />
            <AmenityIcon id={id} showLabel size="sm" />
          </label>
        ))}
      </div>
    </div>
  );
};