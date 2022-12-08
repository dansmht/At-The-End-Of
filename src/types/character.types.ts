import { Cards } from '@src/types/player.types';

export type Character = {
  name: string,
  description: string,
  healthPoints: number,
  startingCards: Cards,
};
