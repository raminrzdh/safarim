import React from 'react';
import { Tag } from 'lucide-react';

interface StatusTagProps {
  type: 'fully-booked' | 'last-rooms' | 'special-offer' | 'best-seller' | 'new';
  className?: string;
}

const tagStyles = {
  'fully-booked': 'bg-red-100 text-red-800 border-red-200',
  'last-rooms': 'bg-orange-100 text-orange-800 border-orange-200',
  'special-offer': 'bg-green-100 text-green-800 border-green-200',
  'best-seller': 'bg-purple-100 text-purple-800 border-purple-200',
  'new': 'bg-blue-100 text-blue-800 border-blue-200',
};

const tagLabels = {
  'fully-booked': 'تکمیل ظرفیت',
  'last-rooms': 'آخرین اتاق‌ها',
  'special-offer': 'پیشنهاد ویژه',
  'best-seller': 'پرفروش',
  'new': 'جدید',
};

export const StatusTag: React.FC<StatusTagProps> = ({ type, className = '' }) => {
  return (
    <div className={`flex items-center px-2 py-1 rounded-full border ${tagStyles[type]} ${className}`}>
      <Tag className="w-3 h-3 ml-1" />
      <span className="text-xs font-medium">{tagLabels[type]}</span>
    </div>
  );
};