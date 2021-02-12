/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUnixTime } from 'date-fns';
import type { Repair } from '../../interfaces';
import type { RepairState } from '../../interfaces/store';

const initialState: RepairState = {
  car: '',
  cost: 0,
  date: getUnixTime(new Date()),
  type: '',
  repairList: [],
  editingId: null,
};

const repairSlice = createSlice({
  name: 'repair',
  initialState,
  reducers: {
    changeCar: (state, action: PayloadAction<string>) => {
      state.car = action.payload;
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
    changeDate: (state, action: PayloadAction<number>) => {
      state.date = action.payload;
    },
    changeType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    getRepairList: () => {},
    getRepairListOfCar: (state, action: PayloadAction<string>) => {},
    addRepairList: (state, action: PayloadAction<Repair[]>) => {
      state.repairList = action.payload;
    },
    createRepair: (state, action: PayloadAction<string>) => {},
    resetFields: (state) => {
      state.car = '';
      state.cost = 0;
      state.date = getUnixTime(Date.now());
      state.type = '';
    },
    setEditingData: (state, action: PayloadAction<Repair | null>) => {
      if (action.payload) {
        state.editingId = action.payload._id || null;
        state.car = '';
        state.cost = action.payload.cost;
        state.date = getUnixTime(Date.now());
        state.type = action.payload.type;
      } else {
        state.editingId = null;
        state.car = '';
        state.cost = 0;
        state.date = getUnixTime(Date.now());
        state.type = '';
      }
    },
    updateRepair: (state) => {},
    changeRepairData: (state, action: PayloadAction<Repair>) => {
      const index = state.repairList.findIndex((repair) => repair._id === action.payload._id);
      state.repairList[index] = action.payload;
    },
    deleteRepair: (state, action: PayloadAction<string>) => {},
    deleteRepairData: (state, action: PayloadAction<string>) => {
      const index = state.repairList.findIndex((repair) => repair._id === action.payload);
      state.repairList.splice(index, 1);
    },
  },
});

export const {
  changeCar,
  changeCost,
  changeDate,
  changeType,
  getRepairListOfCar,
  getRepairList,
  createRepair,
  addRepairList,
  resetFields,
  setEditingData,
  updateRepair,
  changeRepairData,
  deleteRepair,
  deleteRepairData,
} = repairSlice.actions;

export default repairSlice.reducer;

type Keys = keyof typeof repairSlice.actions;

export type RepairActions = ReturnType<typeof repairSlice.actions[Keys]>;
