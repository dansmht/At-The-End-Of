import { RootState } from '../store';

export const numbersGeneratorSelector = (state: RootState) => state.numbersGenerator.random;
