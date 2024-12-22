import React from 'react';
import { AmenityIcon } from './AmenityIcon';
import { AmenityId } from '../../types';

interface AmenityListProps {
  amenities: AmenityId[];
  showLabels?: boolean;
  className?: string;
}

export const AmenityList: React.FC<AmenityListProps> = ({
  amenities,
  showLabels = false,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {amenities.map((amenity) => (
        <AmenityIcon
          key={amenity}
          id={amenity}
          showLabel={showLabels}
          className="bg-gray-50 px-3 py-1 rounded-full"
        />
      ))}
    </div>
  );
};