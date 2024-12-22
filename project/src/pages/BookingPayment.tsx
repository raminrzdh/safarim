import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookingDraft } from '../types';
import { formatPrice } from '../utils/format';
import { formatDateRange } from '../utils/date';

export const BookingPayment: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDraft } = location.state as { bookingDraft: BookingDraft };

  const handlePayment = () => {
    // Here you would implement actual payment processing
    alert('پرداخت با موفقیت انجام شد!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">تأیید و پرداخت</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">تاریخ اقامت:</span>
          <span className="font-medium">
            {formatDateRange(bookingDraft.checkIn, bookingDraft.checkOut)}
          </span>
        </div>
        
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">تعداد مهمان‌ها:</span>
          <span className="font-medium">{bookingDraft.guests} نفر</span>
        </div>
        
        <div className="flex justify-between py-2 border-b">
          <span className="text-gray-600">مبلغ کل:</span>
          <span className="font-bold text-lg">
            {formatPrice(bookingDraft.totalPrice)}
          </span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        پرداخت و تکمیل رزرو
      </button>
    </div>
  );
};