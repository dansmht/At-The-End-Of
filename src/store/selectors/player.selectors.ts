import { RootState } from '../store';

export const playerSelector = (state: RootState) => state.player.data;
export const characterSelector = (state: RootState) => state.player.character;
