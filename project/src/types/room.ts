export interface Room {
  id: string;
  hotelId: string;
  name: string;
  description: string;
  capacity: number;
  price: number;
  amenities: string[];
  imageUrl: string;
  type: string;
  bedType: string;
  size: number;
  view: string;
  status?: 'available' | 'last-units' | 'unavailable';
  remainingUnits?: number;
}