import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ view, onChange }) => {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <button
        onClick={() => onChange('grid')}
        className={`p-2 rounded-lg transition-colors ${
          view === 'grid' 
            ? 'bg-blue-100 text-blue-600' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
        title="نمایش شبکه‌ای"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange('list')}
        className={`p-2 rounded-lg transition-colors ${
          view === 'list' 
            ? 'bg-blue-100 text-blue-600' 
            : 'hover:bg-gray-100 text-gray-600'
        }`}
        title="نمایش لیستی"
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
};