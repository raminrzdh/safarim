import { tehranHotels } from './tehran';
import { mashhadHotels } from './mashhad';
import { isfahanHotels } from './isfahan';
import { shirazHotels } from './shiraz';
import { kishHotels } from './kish';
import { Hotel } from '../../types';

export const hotels: Hotel[] = [
  ...tehranHotels,
  ...mashhadHotels,
  ...isfahanHotels,
  ...shirazHotels,
  ...kishHotels
];