import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from 'lucide-react';
import { registerLocale } from 'react-datepicker';
import moment from 'jalali-moment';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onChange,
}) => {
  const formatDate = (date: Date) => {
    return moment(date).locale('fa').format('YYYY/MM/DD');
  };

  return (
    <div className="relative">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => onChange(dates as [Date | null, Date | null])}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
        placeholderText="انتخاب تاریخ اقامت"
        className="w-full px-4 py-3 pl-12 pr-4 text-right rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        formatWeekDay={nameOfDay => moment().locale('fa').weekday(nameOfDay).format('dd')}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
            >
              ›
            </button>
            <div className="text-lg font-semibold">
              {moment(date).locale('fa').format('MMMM YYYY')}
            </div>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              type="button"
              className="p-1 hover:bg-gray-100 rounded-full disabled:opacity-50"
            >
              ‹
            </button>
          </div>
        )}
      />
      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};