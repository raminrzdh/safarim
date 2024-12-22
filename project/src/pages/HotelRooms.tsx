import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { rooms } from '../data/rooms';
import { hotels } from '../data/hotels';
import { RoomCard } from '../components/RoomCard';
import { HotelMap } from '../components/HotelMap';
import { Reviews } from '../components/Reviews';
import { Facilities } from '../components/Facilities';
import { formatDateRange } from '../utils/date';

interface LocationState {
  checkIn: Date;
  checkOut: Date;
}

export const HotelRooms: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { checkIn, checkOut } = location.state as LocationState;
  
  const hotel = hotels.find(h => h.id === hotelId);
  const hotelRooms = rooms.filter(room => room.hotelId === hotelId);

  const handleSelectRoom = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    if (room && hotel) {
      const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      const bookingDraft = {
        hotelId: hotel.id,
        roomId,
        checkIn,
        checkOut,
        guests: room.capacity,
        totalPrice: room.price * nights,
      };
      navigate('/reservation', { state: { bookingDraft } });
    }
  };

  if (!hotel) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600">هتل مورد نظر یافت نشد.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-700"
        >
          <ArrowRight className="w-5 h-5 ml-1" />
          بازگشت
        </button>
        <div className="text-gray-600">
          تاریخ اقامت: {formatDateRange(checkIn, checkOut)}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img 
            src={hotel.imageUrl} 
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-1" />
                {hotel.city}
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current ml-1" />
                {hotel.rating}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-gray-600 text-lg mb-8">{hotel.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">موقعیت هتل</h3>
              <HotelMap hotel={hotel} />
            </div>
            <div>
              <Facilities facilities={hotel.facilities} />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-6">اتاق‌های موجود</h3>
            <div className="grid grid-cols-1 gap-6">
              {hotelRooms.map(room => (
                <RoomCard
                  key={room.id}
                  room={room}
                  onSelect={handleSelectRoom}
                />
              ))}
            </div>
          </div>

          <div>
            <Reviews reviews={hotel.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};