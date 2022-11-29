export type Floor = Level[];

export type Level = {
  type: LevelType,
  position: number,
  isHidden: boolean,
};

export type LevelType = 'Chest' | 'Shop' | 'Camp' | 'Monster' | 'Boss' | 'MegaBoss';

export type LevelWithFloor = {
  level: Level,
  floor: number,
};
