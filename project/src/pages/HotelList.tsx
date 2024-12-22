import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroSlider } from '../components/HeroSlider';
import { SearchForm } from '../components/SearchForm';
import { DealsCarousel } from '../components/deals/DealsCarousel';
import { HotelSection } from '../components/hotels/HotelSection';
import { 
  getTopHotels,
  getPopularHotels,
  getEarlyBirdDeals,
  getLastMinuteDeals
} from '../utils/hotelUtils';
import { today, tomorrow } from '../utils/date';

export const HotelList: React.FC = () => {
  const navigate = useNavigate();
  const topHotels = getTopHotels();
  const popularHotels = getPopularHotels();
  const earlyBirdDeals = getEarlyBirdDeals();
  const lastMinuteDeals = getLastMinuteDeals();

  const handleHotelSelect = (hotelId: string) => {
    navigate(`/hotel/${hotelId}/rooms`, {
      state: { 
        checkIn: today(),
        checkOut: tomorrow()
      }
    });
  };

  return (
    <div className="space-y-12">
      <HeroSlider />
      <SearchForm />

      {earlyBirdDeals.length > 0 && (
        <section>
          <DealsCarousel
            title="تخفیف‌های پیش‌خرید"
            icon="early-bird"
            hotels={earlyBirdDeals}
            onBookNow={handleHotelSelect}
          />
        </section>
      )}

      {lastMinuteDeals.length > 0 && (
        <section>
          <DealsCarousel
            title="فرصت‌های آخر"
            icon="last-minute"
            hotels={lastMinuteDeals}
            onBookNow={handleHotelSelect}
          />
        </section>
      )}

      {topHotels.length > 0 && (
        <HotelSection
          title="هتل‌های برتر"
          type="top"
          hotels={topHotels}
          onBookNow={handleHotelSelect}
        />
      )}

      {popularHotels.length > 0 && (
        <HotelSection
          title="محبوب‌ترین هتل‌ها"
          type="popular"
          hotels={popularHotels}
          onBookNow={handleHotelSelect}
        />
      )}
    </div>
  );
};