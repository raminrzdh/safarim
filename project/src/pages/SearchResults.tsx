import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchFilters } from '../components/filters/SearchFilters';
import { HotelCard } from '../components/HotelCard';
import { HotelListItem } from '../components/HotelListItem';
import { ViewToggle } from '../components/ViewToggle';
import { MarketingBannerList } from '../components/marketing/MarketingBannerList';
import { hotels } from '../data/hotels';
import { useHotelFilters } from '../utils/hooks/useHotelFilters';

interface SearchState {
  query: string;
  city: string;
  checkIn: Date;
  checkOut: Date;
}

export const SearchResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchState = location.state as SearchState;
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const { filters, filteredHotels, handleFilterChange } = useHotelFilters({
    initialHotels: hotels,
    searchQuery: searchState?.query,
    searchCity: searchState?.city
  });

  const handleHotelSelect = (hotelId: string) => {
    navigate(`/hotel/${hotelId}/rooms`, {
      state: { 
        checkIn: filters.dates[0], 
        checkOut: filters.dates[1] 
      }
    });
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1">
        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div className="col-span-3 space-y-8">
        <MarketingBannerList />
        
        <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">نتایج جستجو</h2>
            <div className="text-gray-600 text-sm mt-1">
              {filteredHotels.length} هتل یافت شد
            </div>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <ViewToggle view={view} onChange={setView} />
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="border rounded-lg px-3 py-2"
            >
              <option value="recommended">پیشنهادی</option>
              <option value="price-asc">قیمت: کم به زیاد</option>
              <option value="price-desc">قیمت: زیاد به کم</option>
              <option value="rating">امتیاز</option>
            </select>
          </div>
        </div>

        <div className={view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 gap-6"
          : "space-y-6"
        }>
          {filteredHotels.map(hotel => (
            view === 'grid' ? (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                onBookNow={handleHotelSelect}
              />
            ) : (
              <HotelListItem
                key={hotel.id}
                hotel={hotel}
                onBookNow={handleHotelSelect}
              />
            )
          ))}
          {filteredHotels.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">هتلی با این مشخصات یافت نشد.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};