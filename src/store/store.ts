import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { mapSlice } from './slices/mapSlice';
import { numbersGeneratorSlice } from './slices/numbersGeneratorSlice';

const middleware = process.env.NODE_ENV === 'development'
  ? [createLogger({ collapsed: true })]
  : [];

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    numbersGenerator: numbersGeneratorSlice.reducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
