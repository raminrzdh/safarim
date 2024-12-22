import { GuestInfo } from './guest';

export interface BookingDraft {
  hotelId: string;
  roomId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  guestInfo?: GuestInfo;
}

export interface Booking extends BookingDraft {
  id: string;
  status: 'confirmed' | 'cancelled';
  paymentMethod: string;
  createdAt: Date;
}