import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { XorShift4096 } from '@src/utils/xorshift/xor4096';
import { NumbersGenerator } from '@src/types/numbersGeneratorTypes';

const initialState: NumbersGenerator = {
  random: null,
};

export const name = 'xorShift';

export const numbersGeneratorSlice = createSlice({
  name,
  initialState,
  reducers: {
    initializeXorShiftGenerator(state, action: PayloadAction<number>) {
      state.random = XorShift4096(action.payload);
    },
  },
});
