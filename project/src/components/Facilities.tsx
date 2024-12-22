import React from 'react';
import { Check } from 'lucide-react';

interface FacilitiesProps {
  facilities: string[];
}

export const Facilities: React.FC<FacilitiesProps> = ({ facilities }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">امکانات و خدمات</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center space-x-2 space-x-reverse">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">{facility}</span>
          </div>
        ))}
      </div>
    </div>
  );
};