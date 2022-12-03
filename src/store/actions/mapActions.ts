import { createAction } from '@reduxjs/toolkit';
import { MapType } from '@src/types/mapTypes';
import { name } from '../slices/mapSlice';

const map = {
  setMap: `${name}/setMap`,
};

export const setMap = createAction<MapType>(map.setMap);
