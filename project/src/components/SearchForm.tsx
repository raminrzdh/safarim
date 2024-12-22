import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { DateRangePicker } from './DateRangePicker';
import { CityFilter } from './CityFilter';
import { getCities } from '../utils/hotelUtils';

export const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const cities = getCities();

  const handleSearch = () => {
    const [checkIn, checkOut] = dateRange;
    if (!checkIn || !checkOut) {
      alert('لطفاً تاریخ اقامت را انتخاب کنید');
      return;
    }

    navigate('/search', {
      state: {
        query: searchQuery,
        city: selectedCity,
        checkIn,
        checkOut
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg -mt-16 relative z-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <SearchBar onSearch={setSearchQuery} />
        <DateRangePicker
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          onChange={setDateRange}
        />
        <CityFilter
          cities={cities}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
        />
      </div>
      <button
        onClick={handleSearch}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
      >
        <Search className="w-5 h-5 ml-2" />
        جستجوی هتل
      </button>
    </div>
  );
};