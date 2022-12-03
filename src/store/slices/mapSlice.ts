import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapType } from '@src/types/mapTypes';

const initialState: MapType = {
  floors: [],
};

export const name = 'map';

export const mapSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMap(state, action: PayloadAction<MapType>) {
      state.floors = action.payload.floors;
    },
  },
});
