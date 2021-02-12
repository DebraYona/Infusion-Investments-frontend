/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Client } from '../../interfaces';
import type { ClientState } from '../../interfaces/store';

const initialState: ClientState = {
  address: '',
  firstName: '',
  lastName: '',
  city: '',
  clientList: [],
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    changeAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    changeFirstname: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    changeLastname: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    getClientList: () => {},
    addClientList: (state, action: PayloadAction<Client[]>) => {
      state.clientList = action.payload;
    },
    createClient: () => {},
    resetFields: (state) => {
      state.lastName = '';
      state.address = '';
      state.city = '';
      state.firstName = '';
    },
  },
});

export const {
  changeCity,
  changeLastname,
  changeAddress,
  changeFirstname,
  getClientList,
  createClient,
  addClientList,
  resetFields,
} = clientSlice.actions;

export default clientSlice.reducer;

type Keys = keyof typeof clientSlice.actions;

export type ClientActions = ReturnType<typeof clientSlice.actions[Keys]>;
