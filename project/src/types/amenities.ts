import { LucideIcon } from 'lucide-react';

export type AmenityId = 
  | 'wifi'
  | 'swimming'
  | 'parking'
  | 'restaurant'
  | 'cafe'
  | 'gym'
  | 'spa'
  | 'shopping'
  | 'bathroom'
  | 'tv'
  | 'kingbed';

export interface AmenityConfig {
  id: AmenityId;
  label: string;
  icon: LucideIcon;
  hotelKey: string;
}

export interface AmenityDisplayProps {
  id: AmenityId;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
}