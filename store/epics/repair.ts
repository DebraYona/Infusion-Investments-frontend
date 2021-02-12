/* eslint-disable @typescript-eslint/no-unused-vars */
import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import api from '../../api';
import type { RootState } from '..';
import {
  getRepairListOfCar,
  RepairActions,
  addRepairList,
  resetFields,
  createRepair,
  deleteRepair,
  deleteRepairData,
  updateRepair,
  changeRepairData,
  getRepairList,
  setEditingData,
} from '../slices/repair';
import { repairFormSelector } from '../selectors/repair';

export const getAllRepairsEpic: Epic<RepairActions, ReturnType<typeof addRepairList>, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType(getRepairList.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return from(api.repair.getAll()).pipe(
        map(({ data }) => {
          console.log(data);
          return addRepairList(data);
        }),
      );
    }),
  );
export const getRepairEpic: Epic<RepairActions, ReturnType<typeof addRepairList>, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType(getRepairListOfCar.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const car = (action as ReturnType<typeof getRepairListOfCar>).payload;
      return from(api.repair.getForCar(car)).pipe(
        map(({ data }) => {
          console.log(data);
          return addRepairList(data);
        }),
      );
    }),
  );

export const createRepairEpic: Epic<
  RepairActions,
  ReturnType<typeof resetFields> | ReturnType<typeof getRepairListOfCar>,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(createRepair.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const car = (action as ReturnType<typeof createRepair>).payload;

      const newRepair = {
        ...repairFormSelector(state),
        car,
      };
      return from(api.repair.create(newRepair)).pipe(
        mergeMap(({ data }) => {
          console.log(data);
          return of(getRepairListOfCar(car), resetFields());
        }),
      );
    }),
  );

export const deleteRepairEpic: Epic<
  RepairActions,
  ReturnType<typeof resetFields> | ReturnType<typeof deleteRepairData>,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(deleteRepair.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const id = (action as ReturnType<typeof deleteRepair>).payload;

      return from(api.repair.delete(id)).pipe(
        filter(({ data }) => data === 1),
        mergeMap(({ data }) => {
          console.log({ deleted: data });
          return of(deleteRepairData(id));
        }),
      );
    }),
  );

export const editRepairEpic: Epic<
  RepairActions,
  ReturnType<typeof setEditingData> | ReturnType<typeof changeRepairData>,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(updateRepair.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const id = state.repair.editingId || '';

      const { car, ...newRepairData } = {
        ...repairFormSelector(state),
      };

      console.log(id);
      console.log(newRepairData);

      return from(api.repair.update(id, newRepairData)).pipe(
        mergeMap(({ data }) => {
          console.log(data);
          return of(changeRepairData(data), setEditingData(null));
        }),
      );
    }),
  );

export const repairsEpics = [
  getAllRepairsEpic,
  getRepairEpic,
  createRepairEpic,
  deleteRepairEpic,
  editRepairEpic,
];
