import { combineReducers } from '@reduxjs/toolkit';
import carReducer from './car';
import clientReducer from './client';
import repairReducer from './repair';

const rootReducer = combineReducers({
  car: carReducer,
  client: clientReducer,
  repair: repairReducer,
});

export default rootReducer;
