import { createSelector } from '@reduxjs/toolkit';
import { fromUnixTime } from 'date-fns';
import type { RootState } from '..';

const repairSelector = (state: RootState) => state.repair;

export const carSelector = createSelector(repairSelector, (repair) => repair.car);
export const costSelector = createSelector(repairSelector, (repair) => repair.cost);
export const dateSelector = createSelector(repairSelector, (repair) => fromUnixTime(repair.date));
export const typeSelector = createSelector(repairSelector, (repair) => repair.type);

export const repairsListSelector = createSelector(repairSelector, (repair) => repair.repairList);

export const repairFormSelector = createSelector(repairSelector, (repair) => {
  const { repairList, editingId, ...newRepair } = repair;
  return { ...newRepair, date: fromUnixTime(repair.date) };
});

export const editingIdSelector = createSelector(repairSelector, (repair) => repair.editingId);
