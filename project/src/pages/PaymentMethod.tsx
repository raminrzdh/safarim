import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Wallet } from 'lucide-react';
import { BookingDraft } from '../types';
import { formatPrice } from '../utils/format';

const PAYMENT_METHODS = [
  {
    id: 'online',
    title: 'پرداخت آنلاین',
    description: 'پرداخت امن با درگاه بانکی',
    icon: CreditCard
  },
  {
    id: 'wallet',
    title: 'کیف پول',
    description: 'پرداخت از موجودی کیف پول',
    icon: Wallet
  }
];

export const PaymentMethod: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDraft } = location.state as { bookingDraft: BookingDraft };
  const [selectedMethod, setSelectedMethod] = useState('online');

  const handlePayment = () => {
    // Here you would implement actual payment processing
    navigate('/voucher', {
      state: {
        booking: {
          ...bookingDraft,
          id: Math.random().toString(36).substr(2, 9),
          paymentMethod: selectedMethod,
          status: 'confirmed',
          createdAt: new Date()
        }
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">انتخاب روش پرداخت</h2>
        
        <div className="space-y-4 mb-8">
          {PAYMENT_METHODS.map(({ id, title, description, icon: Icon }) => (
            <label
              key={id}
              className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                selectedMethod === id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={id}
                  checked={selectedMethod === id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="ml-3"
                />
                <Icon className="w-6 h-6 ml-3 text-blue-600" />
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-gray-500">{description}</div>
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">مبلغ قابل پرداخت:</span>
            <span className="text-2xl font-bold">
              {formatPrice(bookingDraft.totalPrice)}
            </span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            پرداخت و دریافت واچر
          </button>
        </div>
      </div>
    </div>
  );
};