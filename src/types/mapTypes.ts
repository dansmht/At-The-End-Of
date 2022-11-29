export type MapType = {
  floors: Floor[],
};

export type Floor = Room[];

export type Room = {
  type: RoomType,
  isHidden: boolean,
};

export type RoomType = 'Chest' | 'Shop' | 'Camp' | 'Monster' | 'Boss' | 'MegaBoss';
