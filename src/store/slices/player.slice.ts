import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { characters } from '@constants/characters.const';
import { Nullable } from '@src/types/general.types';
import { Player } from '@src/types/player.types';
import { Character } from '@src/types/character.types';

const initialState: { data: Player, character: Nullable<Character> } = {
  data: {
    healthPoints: 0,
    maxHealthPoints: 0,
    gold: 0,
    potions: [],
    cards: {
      deck: [],
      hand: [],
      drawPile: [],
      discardPile: [],
      exhausted: [],
    },
  },
  character: null,
};

export const name = 'player';

export const playerSlice = createSlice({
  name,
  initialState,
  reducers: {
    setPlayer(state, action: PayloadAction<Player>) {
      state.data = action.payload;
    },
    resetPlayer(state) {
      state.data = initialState.data;
    },
    setCharacterByIndex(state, action: PayloadAction<number>) {
      state.character = characters[action.payload];
    },
    resetCharacter(state) {
      state.character = initialState.character;
    },
  },
});
