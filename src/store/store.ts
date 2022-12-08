import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { playerSlice } from '@store/slices/player.slice';
import { mapSlice } from './slices/map.slice';

const middleware = process.env.NODE_ENV === 'development'
  ? [createLogger({ collapsed: true })]
  : [];

const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    player: playerSlice.reducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
