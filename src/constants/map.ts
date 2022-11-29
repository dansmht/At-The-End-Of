import { RoomType } from '../types/mapTypes';

export const MAX_FLOORS = 10;
export const MIN_ROOMS_IN_FLOOR = 1;
export const MAX_ROOMS_IN_FLOOR = 3;

// Monster - 43% / Chest & Camp & Shop & Boss - 14% / MegaBoss - 0%
export const ROOM_TYPES_WITH_CERTAIN_CHANCE: RoomType[] = ['Monster', 'Monster', 'Monster', 'Chest', 'Camp', 'Shop', 'Boss'];
