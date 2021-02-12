/* eslint-disable @typescript-eslint/no-unused-vars */
import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import api from '../../api';
import type { RootState } from '..';

import { clientFormSelector } from '../selectors/client';
import { getCarList, CarActions, addCarList, resetFields, createCar } from '../slices/car';
import { carFormSelector } from '../selectors/car';

export const getCarEpic: Epic<CarActions, ReturnType<typeof addCarList>, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType(getCarList.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const client = (action as ReturnType<typeof getCarList>).payload;
      return from(api.car.getByClient(client)).pipe(
        map(({ data }) => {
          console.log(data);
          return addCarList(data);
        }),
      );
    }),
  );

export const createCarEpic: Epic<
  CarActions,
  ReturnType<typeof resetFields> | ReturnType<typeof getCarList>,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(createCar.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const client = (action as ReturnType<typeof createCar>).payload;

      const newCar = {
        ...carFormSelector(state),
        client,
      };
      return from(api.car.create(newCar)).pipe(
        mergeMap(({ data }) => {
          console.log(data);
          return of(getCarList(client), resetFields());
        }),
      );
    }),
  );
export const carsEpics = [getCarEpic, createCarEpic];
