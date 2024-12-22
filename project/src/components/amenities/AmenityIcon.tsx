import React from 'react';
import { getAmenityIcon, getAmenityLabel } from '../../config/amenities';
import { AmenityDisplayProps } from '../../types';

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

export const AmenityIcon: React.FC<AmenityDisplayProps> = ({
  id,
  size = 'md',
  showLabel = false,
  className = ''
}) => {
  const Icon = getAmenityIcon(id);
  if (!Icon) return null;

  return (
    <div className={`flex items-center ${className}`}>
      <Icon className={`${sizeClasses[size]} text-gray-600`} />
      {showLabel && (
        <span className="mr-2 text-sm text-gray-600">
          {getAmenityLabel(id)}
        </span>
      )}
    </div>
  );
};