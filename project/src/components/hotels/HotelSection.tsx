import React from 'react';
import { Trophy, Flame, Zap, Clock } from 'lucide-react';
import { Hotel } from '../../types';
import { HotelCard } from '../HotelCard';

interface HotelSectionProps {
  title: string;
  type: 'top' | 'popular' | 'early-bird' | 'last-minute';
  hotels: Hotel[];
  onBookNow: (hotelId: string) => void;
}

const sectionIcons = {
  'top': <Trophy className="w-6 h-6 text-yellow-500" />,
  'popular': <Flame className="w-6 h-6 text-red-500" />,
  'early-bird': <Zap className="w-6 h-6 text-blue-500" />,
  'last-minute': <Clock className="w-6 h-6 text-purple-500" />
};

export const HotelSection: React.FC<HotelSectionProps> = ({
  title,
  type,
  hotels,
  onBookNow
}) => {
  return (
    <section className="space-y-6">
      <div className="flex items-center space-x-2 space-x-reverse">
        {sectionIcons[type]}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onBookNow={onBookNow}
          />
        ))}
      </div>
    </section>
  );
};