import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Users, CreditCard, Building2, MapPin } from 'lucide-react';
import { Booking } from '../types';
import { formatDateRange } from '../utils/date';
import { formatPrice } from '../utils/format';
//import { hotels, rooms } from '../data/';
import { hotels } from '../data/hotels';
import { rooms } from '../data/rooms';

export const BookingVoucher: React.FC = () => {
  const location = useLocation();
  const { booking } = location.state as { booking: Booking };
  
  const hotel = hotels.find(h => h.id === booking.hotelId);
  const room = rooms.find(r => r.id === booking.roomId);

  if (!hotel || !room) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="border-b pb-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                رزرو شما با موفقیت ثبت شد
              </h2>
              <p className="text-gray-600">
                کد رزرو: {booking.id}
              </p>
            </div>
            <Building2 className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">اطلاعات هتل</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Building2 className="w-5 h-5 ml-2 text-gray-500" />
                <span>{hotel.name}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-2 text-gray-500" />
                <span>{hotel.city}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">جزئیات رزرو</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 ml-2 text-gray-500" />
                <span>{formatDateRange(booking.checkIn, booking.checkOut)}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 ml-2 text-gray-500" />
                <span>{booking.guests} نفر</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="w-5 h-5 ml-2 text-gray-500" />
                <span>{formatPrice(booking.totalPrice)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">اطلاعات مهمان</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600">نام و نام خانوادگی:</span>
                <span className="mr-2">
                  {booking.guestInfo.firstName} {booking.guestInfo.lastName}
                </span>
              </div>
              <div>
                <span className="text-gray-600">شماره تماس:</span>
                <span className="mr-2">{booking.guestInfo.phone}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              • لطفاً این واچر را در زمان ورود به هتل همراه داشته باشید.
              <br />
              • ساعت تحویل اتاق ۱۴:۰۰ و ساعت تخلیه ۱۲:۰۰ می‌باشد.
              <br />
              • در صورت نیاز به اطلاعات بیشتر با شماره ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            چاپ واچر
          </button>
        </div>
      </div>
    </div>
  );
};