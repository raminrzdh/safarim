import React from 'react';
import { ChevronRight, ChevronLeft, Clock, Zap } from 'lucide-react';
import { Hotel } from '../../types';
import { HotelCard } from '../HotelCard';

interface DealsCarouselProps {
  title: string;
  icon: 'early-bird' | 'last-minute';
  hotels: Hotel[];
  onBookNow: (hotelId: string) => void;
}

export const DealsCarousel: React.FC<DealsCarouselProps> = ({
  title,
  icon,
  hotels,
  onBookNow,
}) => {
  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById(`deals-container-${icon}`);
    if (container) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 space-x-reverse">
          {icon === 'early-bird' ? (
            <Zap className="w-6 h-6 text-yellow-500" />
          ) : (
            <Clock className="w-6 h-6 text-red-500" />
          )}
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        id={`deals-container-${icon}`}
        className="flex overflow-x-auto space-x-6 space-x-reverse pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {hotels.map((hotel) => (
          <div key={hotel.id} className="w-[400px] flex-shrink-0">
            <HotelCard hotel={hotel} onBookNow={onBookNow} />
          </div>
        ))}
      </div>
    </div>
  );
};