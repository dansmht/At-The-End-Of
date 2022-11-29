import { createAction } from '@reduxjs/toolkit';
import { name } from '../slices/mapSlice';
import { MapType } from '../../types/mapTypes';

const map = {
  setMap: `${name}/setMap`,
};

export const setMap = createAction<MapType>(map.setMap);
