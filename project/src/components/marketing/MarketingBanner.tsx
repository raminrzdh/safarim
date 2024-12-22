import React, { useState } from 'react';
import { X, Tag, Gift } from 'lucide-react';

interface MarketingBannerProps {
  offer: {
    id: string;
    title: string;
    description: string;
    icon: 'tag' | 'gift';
    bgColor: string;
  };
  onClose: (id: string) => void;
}

const icons = {
  tag: Tag,
  gift: Gift
};

export const MarketingBanner: React.FC<MarketingBannerProps> = ({ offer, onClose }) => {
  const Icon = icons[offer.icon];
  
  return (
    <div className={`relative ${offer.bgColor} text-white p-4 rounded-lg shadow-md`}>
      <button 
        onClick={() => onClose(offer.id)}
        className="absolute left-2 top-2 p-1 hover:bg-white/20 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-center">
        <Icon className="w-6 h-6 ml-3 flex-shrink-0" />
        <div>
          <h3 className="font-bold">{offer.title}</h3>
          <p className="text-sm text-white/90">{offer.description}</p>
        </div>
      </div>
    </div>
  );
};