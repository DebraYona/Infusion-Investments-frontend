/* eslint-disable @typescript-eslint/no-unused-vars */
import { from, of } from 'rxjs';
import { Epic, ofType } from 'redux-observable';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import api from '../../api';
import type { RootState } from '..';
import {
  addClientList,
  ClientActions,
  createClient,
  getClientList,
  resetFields,
} from '../slices/client';
import { clientFormSelector } from '../selectors/client';

export const getClientsEpic: Epic<ClientActions, ReturnType<typeof addClientList>, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType(getClientList.type),
    withLatestFrom(state$),
    mergeMap(() => {
      return from(api.client.getAll()).pipe(
        map(({ data }) => {
          console.log(data);
          return addClientList(data);
        }),
      );
    }),
  );
export const createClientsEpic: Epic<
  ClientActions,
  ReturnType<typeof resetFields> | ReturnType<typeof getClientList>,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(createClient.type),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const newClient = clientFormSelector(state);
      return from(api.client.create(newClient)).pipe(
        mergeMap(({ data }) => {
          console.log(data);
          return of(getClientList(), resetFields());
        }),
      );
    }),
  );

export const clientsEpics = [getClientsEpic, createClientsEpic];
