// Source https://github.com/davidbau/xsrand/blob/master/xor4096.js
//
// Usage:
// const random = XorShift4096(1);
// random.get() = 0.15204375493340194 // (0, 1) range, 53 bits.
// random.getInt32(), -1570618080     // signed int32, 32 bits.
// random.getDouble(), 0.42061677247796503
// random.getIntInRange(1,100), 86

class XorGen {
  seed: string | number | null;
  w: number;
  X: number[];
  i: number;

  constructor(seed: number) {
    this.seed = seed;
    let t, v, i, j, w, X: number[] = [], limit = 128;
    if (this.seed === (this.seed as number | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = this.seed;
      this.seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      this.seed = this.seed + '\0';
      v = 0;
      limit = Math.max(limit, this.seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (this.seed) v ^= this.seed.charCodeAt((j + 32) % this.seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w as number + 0x61c88647) | 0; // Weyl.
        t = (X[j & 127] ^= (v + w));        // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;           // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(this.seed && this.seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure constiables.
    this.w = w as number;
    this.X = X;
    this.i = i;
  }

  next() {
    let w = this.w,
      X = this.X,
      i = this.i,
      t, v;
    // Update Weyl generator.
    this.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    // console.log('X', X, '(i + 34) & 127', (i + 34) & 127)
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    this.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  }
}

export const XorShift4096 = (seed: number = Date.now()) => {
  const xg = new XorGen(seed);

  const getRandom = () => (xg.next() >>> 0) / ((1 << 30) * 4);

  const getRandomDouble = () => {
    let result = 0;
    while (result === 0) {
      const top = xg.next() >>> 11;
      const bot = (xg.next() >>> 0) / ((1 << 30) * 4);
      result = (top + bot) / (1 << 21);
    }
    return result;
  };

  const getRandomInt32 = xg.next.bind(xg);

  const getRandomIntInRange = (min: number, max: number) => Math.floor(min + getRandom() * (max - min));

  return {
    get: getRandom,
    getDouble: getRandomDouble,
    getInt32: getRandomInt32,
    getIntInRange: getRandomIntInRange,
  };
}
