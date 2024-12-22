import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Hotel } from '../types';
import { formatPrice } from '../utils/format';
import { StatusTag } from './StatusTag';
import { AmenityList } from './amenities/AmenityList';

interface HotelListItemProps {
  hotel: Hotel;
  onBookNow: (hotelId: string) => void;
}

export const HotelListItem: React.FC<HotelListItemProps> = ({ hotel, onBookNow }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
      <div className="w-64 h-48 flex-shrink-0">
        <img 
          src={hotel.imageUrl} 
          alt={hotel.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
            <div className="flex items-center mt-1 text-gray-600">
              <MapPin className="w-4 h-4 ml-1" />
              {hotel.city}
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1">{hotel.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
        
        <AmenityList amenities={hotel.amenities} className="mb-4" />
        
        <div className="mt-auto flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">شروع قیمت از</div>
            <div className="text-xl font-bold text-gray-900">
              {formatPrice(hotel.price)}
            </div>
          </div>
          
          <div className="flex items-center space-x-3 space-x-reverse">
            {hotel.status && <StatusTag type={hotel.status} />}
            <button
              onClick={() => onBookNow(hotel.id)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              رزرو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};