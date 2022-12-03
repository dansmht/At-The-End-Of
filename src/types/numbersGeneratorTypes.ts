import { XorShift4096 } from '@src/utils/xorshift/xor4096';

export type XorShiftGen = ReturnType<typeof XorShift4096>;

export type NumbersGenerator = {
  random: null | XorShiftGen,
};
