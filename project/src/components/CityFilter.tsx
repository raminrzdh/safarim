import React from 'react';
import { MapPin } from 'lucide-react';

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

export const CityFilter: React.FC<CityFilterProps> = ({
  cities,
  selectedCity,
  onCityChange,
}) => {
  return (
    <div className="relative">
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        className="w-full px-4 py-3 pl-12 pr-4 text-right rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      >
        <option value="">همه شهرها</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};