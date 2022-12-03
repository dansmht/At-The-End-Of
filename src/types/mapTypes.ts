export type MapType = {
  floors: Floor[],
};

export type Floor = Room[];

export type Room = {
  type: RoomType,
  isHidden: boolean,
  completed: boolean,
};

export type RoomType = 'Treasure' | 'Merchant' | 'Rest' | 'Enemy' | 'Boss';
export type GeneralRoomType = Exclude<RoomType, 'Boss'>;
