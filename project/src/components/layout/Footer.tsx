import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <Building2 className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">رزرو هتل‌های ایران</span>
            </div>
            <p className="text-gray-400 text-sm">
              معتبرترین سامانه رزرو آنلاین هتل‌های ایران
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">درباره ما</Link></li>
              <li><Link to="/contact" className="hover:text-white">تماس با ما</Link></li>
              <li><Link to="/faq" className="hover:text-white">سوالات متداول</Link></li>
              <li><Link to="/terms" className="hover:text-white">قوانین و مقررات</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">مقاصد محبوب</h3>
            <ul className="space-y-2">
              <li><Link to="/hotels/tehran" className="hover:text-white">هتل‌های تهران</Link></li>
              <li><Link to="/hotels/mashhad" className="hover:text-white">هتل‌های مشهد</Link></li>
              <li><Link to="/hotels/isfahan" className="hover:text-white">هتل‌های اصفهان</Link></li>
              <li><Link to="/hotels/kish" className="hover:text-white">هتل‌های کیش</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">تماس با ما</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 ml-2" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 ml-2" />
                <span>info@hotelreserve.ir</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 ml-2" />
                <span>تهران، خیابان ولیعصر</span>
              </li>
            </ul>
            <div className="flex space-x-4 space-x-reverse mt-4">
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© ۱۴۰۲ رزرو هتل‌های ایران. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}