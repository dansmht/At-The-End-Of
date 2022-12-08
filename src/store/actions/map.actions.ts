import { createAction } from '@reduxjs/toolkit';
import { MapType } from '@src/types/map.types';
import { name } from '../slices/map.slice';

const map = {
  setMap: `${name}/setMap`,
};

export const setMap = createAction<MapType>(map.setMap);
