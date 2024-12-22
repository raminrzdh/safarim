import React, { useState } from 'react';
import { MarketingBanner } from './MarketingBanner';

const defaultOffers = [
  {
    id: '1',
    title: 'تخفیف ویژه نوروز ۱۴۰۳',
    description: 'رزرو زودهنگام با ۳۰٪ تخفیف برای عید نوروز',
    icon: 'tag' as const,
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800'
  },
  {
    id: '2',
    title: 'هدیه ویژه ماه عسل',
    description: 'یک شب اقامت رایگان برای زوج‌های جوان',
    icon: 'gift' as const,
    bgColor: 'bg-gradient-to-r from-pink-600 to-purple-600'
  },
  {
    id: '3',
    title: 'تور کیش با پرواز رایگان',
    description: 'رزرو ۳ شب اقامت به همراه پرواز رایگان',
    icon: 'tag' as const,
    bgColor: 'bg-gradient-to-r from-green-600 to-teal-600'
  }
];

export const MarketingBannerList: React.FC = () => {
  const [visibleOffers, setVisibleOffers] = useState(defaultOffers);

  const handleClose = (id: string) => {
    setVisibleOffers(offers => offers.filter(offer => offer.id !== id));
  };

  if (visibleOffers.length === 0) return null;

  return (
    <div className="space-y-4 mb-6">
      {visibleOffers.map(offer => (
        <MarketingBanner
          key={offer.id}
          offer={offer}
          onClose={handleClose}
        />
      ))}
    </div>
  );
};