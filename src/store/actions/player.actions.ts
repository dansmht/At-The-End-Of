import { createAction } from '@reduxjs/toolkit';
import { Player } from '@src/types/player.types';
import { name } from '../slices/player.slice';

const player = {
  setPlayer: `${name}/setPlayer`,
  resetPlayer: `${name}/resetPlayer`,
  setCharacterByIndex: `${name}/setCharacterByIndex`,
  resetCharacter: `${name}/resetCharacter`,
};

export const setPlayer = createAction<Player>(player.setPlayer);
export const resetPlayer = createAction(player.resetPlayer);
export const setCharacterByIndex = createAction<number>(player.setCharacterByIndex);
export const resetCharacter = createAction(player.resetCharacter);
