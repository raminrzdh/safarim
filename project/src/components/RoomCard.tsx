import React from 'react';
import { Users, Wifi, Coffee, Tv, Bath, UtensilsCrossed, Maximize, Eye } from 'lucide-react';
import { Room } from '../types';
import { formatPrice } from '../utils/format';
import { StatusTag } from './StatusTag';

interface RoomCardProps {
  room: Room;
  onSelect: (roomId: string) => void;
}

const amenityIcons: Record<string, React.ReactNode> = {
  'مینی‌بار': <Coffee className="w-5 h-5 text-gray-500" />,
  'تلویزیون': <Tv className="w-5 h-5 text-gray-500" />,
  'وای‌فای': <Wifi className="w-5 h-5 text-gray-500" />,
  'حمام مجهز': <Bath className="w-5 h-5 text-gray-500" />,
  'سرویس اتاق ۲۴ ساعته': <UtensilsCrossed className="w-5 h-5 text-gray-500" />
};

export const RoomCard: React.FC<RoomCardProps> = ({ room, onSelect }) => {
  const getRoomStatus = () => {
    if (room.status === 'unavailable') return 'fully-booked';
    if (room.status === 'last-units') return 'last-rooms';
    return undefined;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={room.imageUrl} 
          alt={room.name} 
          className="w-full h-48 object-cover"
        />
        {room.status && room.status !== 'available' && (
          <div className="absolute top-4 right-4">
            <StatusTag type={getRoomStatus() || 'fully-booked'} />
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-2">
              {room.type}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <Users className="w-5 h-5 text-gray-600" />
            <span className="mr-1 text-gray-600">{room.capacity} نفر</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{room.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-gray-600">
            <Maximize className="w-4 h-4 ml-2" />
            <span className="text-sm">{room.size} متر مربع</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Eye className="w-4 h-4 ml-2" />
            <span className="text-sm">{room.view}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {room.amenities.map((amenity, index) => (
            amenityIcons[amenity] && (
              <div 
                key={index} 
                title={amenity}
                className="flex items-center bg-gray-50 px-3 py-1 rounded-full"
              >
                {amenityIcons[amenity]}
                <span className="mr-2 text-sm text-gray-600">{amenity}</span>
              </div>
            )
          ))}
        </div>

        {room.remainingUnits && room.remainingUnits < 5 && room.status !== 'unavailable' && (
          <div className="text-orange-600 text-sm mb-4">
            تنها {room.remainingUnits} اتاق باقی مانده است!
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <span className="text-sm text-gray-500">قیمت هر شب</span>
            <div className="text-2xl font-bold text-gray-900">
              {formatPrice(room.price)}
            </div>
          </div>
          <button
            onClick={() => onSelect(room.id)}
            disabled={room.status === 'unavailable'}
            className={`px-6 py-3 rounded-lg transition-colors ${
              room.status === 'unavailable'
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {room.status === 'unavailable' ? 'تکمیل ظرفیت' : 'انتخاب اتاق'}
          </button>
        </div>
      </div>
    </div>
  );
};