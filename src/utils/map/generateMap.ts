import {
  MAX_FLOORS, MAX_ROOMS_IN_FLOOR, MIN_ROOMS_IN_FLOOR, ROOM_TYPES_WITH_CERTAIN_CHANCE,
} from '../../constants/map';
import { MapType, RoomType } from '../../types/mapTypes';
import { XorShiftGen } from '../../types/numbersGeneratorTypes';

export const generateMap = (random: XorShiftGen) => {
  const map: MapType = {
    floors: [],
  };

  for (let i = 0; i < MAX_FLOORS; i++) {
    map.floors[i] = [];
  }

  for (let floor = 0; floor < MAX_FLOORS; floor++) {
    const roomsInFloor = random.getIntInRange(MIN_ROOMS_IN_FLOOR, MAX_ROOMS_IN_FLOOR + 1);
    const floorRoomTypes: RoomType[] = [];

    for (let room = 0; room < roomsInFloor; room++) {
      if (floor === MAX_FLOORS - 1) {
        map.floors[floor][room] = {
          type: 'MegaBoss',
          isHidden: false,
        };
        break;
      }

      const roomTypeIndex = random.getIntInRange(0, ROOM_TYPES_WITH_CERTAIN_CHANCE.length);
      const type = ROOM_TYPES_WITH_CERTAIN_CHANCE[roomTypeIndex];

      if (floorRoomTypes.includes(type)) break;
      floorRoomTypes.push(type);

      const isHidden = random.getIntInRange(0, 100) < 15;
      map.floors[floor][room] = { type, isHidden };
    }
  }

  console.log('MAP', map);
  return map;
};
