import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const clientSelector = (state: RootState) => state.client;

export const addressSelector = createSelector(clientSelector, (client) => client.address);
export const firtNameSelector = createSelector(clientSelector, (client) => client.firstName);
export const lastNameSelector = createSelector(clientSelector, (client) => client.lastName);
export const citySelector = createSelector(clientSelector, (client) => client.city);

export const clientFormSelector = createSelector(clientSelector, (client) => {
  const { clientList, ...newClient } = client;
  return newClient;
});

export const clientsListSelector = createSelector(clientSelector, (client) => client.clientList);
