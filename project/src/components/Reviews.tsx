import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';
import moment from 'jalali-moment';

interface ReviewsProps {
  reviews: Review[];
}

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  const formatReviewDate = (dateStr: string) => {
    return moment(dateStr, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY');
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">نظرات مهمانان</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{review.userName}</h4>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="mr-1 text-sm text-gray-600">{review.rating}</span>
                </div>
              </div>
              <span className="text-sm text-gray-500">{formatReviewDate(review.date)}</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};