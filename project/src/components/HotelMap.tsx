import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Hotel } from '../types';

interface HotelMapProps {
  hotel: Hotel;
}

export const HotelMap: React.FC<HotelMapProps> = ({ hotel }) => {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={[hotel.location.lat, hotel.location.lng]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[hotel.location.lat, hotel.location.lng]}>
          <Popup>
            {hotel.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};