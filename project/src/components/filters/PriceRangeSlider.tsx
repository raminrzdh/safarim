import React from 'react';
import { formatPrice } from '../../utils/format';

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">محدوده قیمت</h3>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{formatPrice(currentMin)}</span>
        <span>{formatPrice(currentMax)}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMin}
          onChange={(e) => onChange(Number(e.target.value), currentMax)}
          className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={currentMax}
          onChange={(e) => onChange(currentMin, Number(e.target.value))}
          className="absolute w-full pointer-events-none appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
        />
      </div>
    </div>
  );
};