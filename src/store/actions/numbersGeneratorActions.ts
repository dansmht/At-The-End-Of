import { createAction } from '@reduxjs/toolkit';
import { name } from '../slices/numbersGeneratorSlice';

const numbersGenerator = {
  initialize: `${name}/initializeXorShiftGenerator`,
};

export const initializeXorShiftGenerator = createAction<number>(numbersGenerator.initialize);
