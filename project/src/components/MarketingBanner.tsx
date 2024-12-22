import React from 'react';
import { Tag, Gift, Percent } from 'lucide-react';

export const MarketingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          <div className="flex items-center">
            <Tag className="w-5 h-5 ml-2" />
            <span>تخفیف ویژه رزرو هتل‌های کیش تا ۳۰٪</span>
          </div>
          <div className="flex items-center">
            <Gift className="w-5 h-5 ml-2" />
            <span>ترانسفر رایگان فرودگاهی</span>
          </div>
          <div className="flex items-center">
            <Percent className="w-5 h-5 ml-2" />
            <span>کد تخفیف NOROUZ1403</span>
          </div>
        </div>
      </div>
    </div>
  );
};