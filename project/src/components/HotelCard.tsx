import React from 'react';
import { Star, Wifi, Bath, UtensilsCrossed, Car } from 'lucide-react';
import { Hotel } from '../types';
import { formatPrice } from '../utils/format';
import { StatusTag } from './StatusTag';

interface HotelCardProps {
  hotel: Hotel;
  onBookNow: (hotelId: string) => void;
}

const amenityIcons: Record<string, React.ReactNode> = {
  'وای‌فای رایگان': <Wifi className="w-5 h-5 text-gray-500" />,
  'استخر': <Bath className="w-5 h-5 text-gray-500" />,
  'رستوران': <UtensilsCrossed className="w-5 h-5 text-gray-500" />,
  'پارکینگ': <Car className="w-5 h-5 text-gray-500" />
};

export const HotelCard: React.FC<HotelCardProps> = ({ hotel, onBookNow }) => {
  const renderAmenityIcons = () => {
    return hotel.amenities
      .filter(amenity => amenityIcons[amenity])
      .map((amenity, index) => (
        <div key={index} title={amenity}>
          {amenityIcons[amenity]}
        </div>
      ));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={hotel.imageUrl} 
          alt={hotel.name} 
          className="w-full h-48 object-cover"
        />
        {hotel.status && (
          <div className="absolute top-4 right-4">
            <StatusTag type={hotel.status} />
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{hotel.rating}</span>
          </div>
        </div>
        <p className="mt-2 text-gray-600">{hotel.city}</p>
        <p className="mt-2 text-sm text-gray-500">{hotel.description}</p>
        <div className="mt-4 flex space-x-4 space-x-reverse">
          {renderAmenityIcons()}
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {formatPrice(hotel.price)}
          </span>
          <button
            onClick={() => onBookNow(hotel.id)}
            disabled={hotel.status === 'fully-booked'}
            className={`px-4 py-2 rounded-lg transition-colors ${
              hotel.status === 'fully-booked'
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {hotel.status === 'fully-booked' ? 'تکمیل ظرفیت' : 'رزرو'}
          </button>
        </div>
      </div>
    </div>
  );
};