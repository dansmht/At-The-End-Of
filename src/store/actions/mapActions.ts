import { createAction } from '@reduxjs/toolkit';
import { name } from '../slices/mapSlice';
import { LevelWithFloor } from '../../types/mapTypes';

const map = {
  addLevelToFloor: `${name}/addLevelToFloor`,
};

export const addLevelToFloor = createAction<LevelWithFloor>(map.addLevelToFloor);
