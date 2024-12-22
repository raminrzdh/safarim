import { Hotel } from '../../types';
import { getAmenityHotelKey } from '../../config/amenities';

export const filterByAmenities = (hotels: Hotel[], amenities: string[]): Hotel[] => {
  if (!amenities.length) return hotels;
  
  return hotels.filter(hotel => 
    amenities.every(amenityId => 
      hotel.amenities.includes(getAmenityHotelKey(amenityId))
    )
  );
};