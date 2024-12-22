import React from 'react';
import { Star } from 'lucide-react';

interface RatingFilterProps {
  selectedRating: number;
  onChange: (rating: number) => void;
}

export const RatingFilter: React.FC<RatingFilterProps> = ({
  selectedRating,
  onChange,
}) => {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">امتیاز هتل</h3>
      <div className="space-y-2">
        {ratings.map((rating) => (
          <label
            key={rating}
            className={`flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-50 ${
              selectedRating === rating ? 'bg-blue-50' : ''
            }`}
          >
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => onChange(rating)}
              className="ml-2"
            />
            <div className="flex items-center">
              {Array.from({ length: rating }).map((_, index) => (
                <Star
                  key={index}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="mr-1 text-sm text-gray-600">و بالاتر</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};