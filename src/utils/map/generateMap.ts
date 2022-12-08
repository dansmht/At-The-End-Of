import {
  MAX_FLOORS, MAX_ROOMS_IN_FLOOR, MIN_ROOMS_IN_FLOOR, ROOM_TYPE_CHANCE,
} from '@constants/map.const';
import { GeneralRoomType, MapType } from '@src/types/map.types';
import { XorShiftGen } from '@src/types/xorShift.types';

export const generateMap = (xorShift: XorShiftGen) => {
  const map: MapType = {
    floors: [],
  };

  for (let i = 0; i < MAX_FLOORS; i++) {
    map.floors[i] = [];
  }

  for (let floor = 0; floor < MAX_FLOORS; floor++) {
    const roomsInFloor = xorShift.getIntInRange(MIN_ROOMS_IN_FLOOR, MAX_ROOMS_IN_FLOOR + 1);
    const floorRoomTypes: GeneralRoomType[] = [];

    for (let room = 0; room < roomsInFloor; room++) {
      if (floor === MAX_FLOORS - 1) {
        map.floors[floor][room] = {
          type: 'Boss',
          isHidden: false,
          completed: false,
        };
        break;
      }

      let type: GeneralRoomType;
      const roomTypeNumber = xorShift.getIntInRange(0, 100);
      if (roomTypeNumber < ROOM_TYPE_CHANCE.Enemy) {
        type = 'Enemy';
      } else if (roomTypeNumber < ROOM_TYPE_CHANCE.Merchant) {
        type = 'Merchant';
      } else if (roomTypeNumber < ROOM_TYPE_CHANCE.Treasure) {
        type = 'Treasure';
      } else {
        type = 'Rest';
      }

      if (floorRoomTypes.includes(type)) break;
      floorRoomTypes.push(type);

      const isHidden = xorShift.getIntInRange(0, 100) < 30;
      map.floors[floor][room] = { type, isHidden, completed: false };
    }
  }

  return map;
};
