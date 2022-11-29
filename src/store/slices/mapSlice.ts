import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapType } from '../../types/mapTypes';

const initialState: MapType = {
  floors: [],
};

export const name = 'map';

export const mapSlice = createSlice({
  name,
  initialState,
  reducers: {
    setMap(state, action: PayloadAction<MapType>) {
      state = action.payload;
    },
  },
});
