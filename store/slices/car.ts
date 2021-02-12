/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Car } from '../../interfaces';
import type { CarState } from '../../interfaces/store';

const initialState: CarState = {
  client: '',
  carModel: '',
  year: '',
  placa: '',
  valves: '',
  oil: '',
  photo: '',
  carList: [],
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeClient: (state, action: PayloadAction<string>) => {
      state.client = action.payload;
    },
    changeCarModel: (state, action: PayloadAction<string>) => {
      state.carModel = action.payload;
    },
    changeYear: (state, action: PayloadAction<string>) => {
      state.year = action.payload;
    },
    changePlaca: (state, action: PayloadAction<string>) => {
      state.placa = action.payload;
    },
    changeValves: (state, action: PayloadAction<string>) => {
      state.valves = action.payload;
    },
    changeOil: (state, action: PayloadAction<string>) => {
      state.oil = action.payload;
    },
    changePhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    getCarList: (state, action: PayloadAction<string>) => {},
    addCarList: (state, action: PayloadAction<Car[]>) => {
      state.carList = action.payload;
    },
    createCar: (state, action: PayloadAction<string>) => {},
    resetFields: (state) => {
      state.client = '';
      state.carModel = '';
      state.year = '';
      state.placa = '';
      state.valves = '';
      state.oil = '';
      state.photo = '';
    },
  },
});

export const {
  changeClient,
  changeCarModel,
  changeYear,
  changePlaca,
  changeValves,
  changeOil,
  changePhoto,
  getCarList,
  addCarList,
  createCar,
  resetFields,
} = carSlice.actions;

export default carSlice.reducer;

type Keys = keyof typeof carSlice.actions;

export type CarActions = ReturnType<typeof carSlice.actions[Keys]>;
