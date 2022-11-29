import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Floor, LevelWithFloor } from '../../types/mapTypes';

type MapSlice = {
  floors: Floor[],
};

const initialState: MapSlice = {
  floors: [],
};

export const name = 'map';

export const mapSlice = createSlice({
  name,
  initialState,
  reducers: {
    addLevelToFloor(state, action: PayloadAction<LevelWithFloor>) {
      if (state.floors[action.payload.floor]) {
        state.floors[action.payload.floor].push(action.payload.level);
      } else {
        state.floors[action.payload.floor] = [action.payload.level];
      }
    },
  },
});
