import { Review } from './review';

export interface Hotel {
  id: string;
  name: string;
  description: string;
  city: string;
  rating: number;
  price: number;
  imageUrl: string;
  amenities: string[];
  location: {
    lat: number;
    lng: number;
  };
  reviews: Review[];
  facilities: string[];
  status?: 'fully-booked' | 'last-rooms' | 'special-offer' | 'best-seller' | 'new';
  availableRooms?: number;
}