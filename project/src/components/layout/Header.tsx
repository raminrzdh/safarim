import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, User, Bell } from 'lucide-react';
import { MarketingBanner } from '../MarketingBanner';

export const Header: React.FC = () => {
  return (
    <>
      <MarketingBanner />
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 space-x-reverse">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">رزرو هتل‌های ایران</h1>
            </Link>

            <div className="flex items-center space-x-6 space-x-reverse">
              <button className="text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
              </button>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                <User className="w-6 h-6" />
              </Link>
              <button className="lg:hidden text-gray-600 hover:text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}