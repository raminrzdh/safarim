import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Users, CalendarDays } from 'lucide-react';
import { BookingDraft } from '../types';
import { formatDateRange } from '../utils/date';

interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationalId: string;
}

export const ReservationForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDraft } = location.state as { bookingDraft: BookingDraft };
  
  const [guestInfo, setGuestInfo] = useState<GuestInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationalId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment', {
      state: {
        bookingDraft: {
          ...bookingDraft,
          guestInfo
        }
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6">اطلاعات رزرو</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <CalendarDays className="w-5 h-5 ml-2" />
            <span>تاریخ اقامت: {formatDateRange(bookingDraft.checkIn, bookingDraft.checkOut)}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-5 h-5 ml-2" />
            <span>تعداد مهمان: {bookingDraft.guests} نفر</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                نام
              </label>
              <input
                type="text"
                required
                value={guestInfo.firstName}
                onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                نام خانوادگی
              </label>
              <input
                type="text"
                required
                value={guestInfo.lastName}
                onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              کد ملی
            </label>
            <input
              type="text"
              required
              pattern="[0-9]{10}"
              value={guestInfo.nationalId}
              onChange={(e) => setGuestInfo({ ...guestInfo, nationalId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ایمیل
            </label>
            <input
              type="email"
              required
              value={guestInfo.email}
              onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              شماره موبایل
            </label>
            <input
              type="tel"
              required
              pattern="09[0-9]{9}"
              value={guestInfo.phone}
              onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ادامه و پرداخت
          </button>
        </form>
      </div>
    </div>
  );
};