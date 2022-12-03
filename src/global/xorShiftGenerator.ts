import { XorShift4096 } from '@src/utils/xorshift/xor4096';

type XorShiftGen = ReturnType<typeof XorShift4096>;

let random: null | XorShiftGen = null;

export const initXorShiftGenerator = (seed: number): XorShiftGen => {
  random = XorShift4096(seed);
  return random;
};

export const getXorShiftGenerator = () => random;

export const clearXorShiftGenerator = () => {
  random = null;
  return random;
};
