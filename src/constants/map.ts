import { GeneralRoomType } from '@src/types/map.types';

export const MAX_FLOORS = 10;
export const MIN_ROOMS_IN_FLOOR = 1;
export const MAX_ROOMS_IN_FLOOR = 3;

export const ROOM_TYPE_CHANCE: { [type in GeneralRoomType]: number } = {
  Enemy: 52, // 52%
  Merchant: 68, // 16%
  Treasure: 84, // 16%
  Rest: 100, // 16%
};
