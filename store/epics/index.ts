/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineEpics, Epic } from 'redux-observable';
import { catchError } from 'rxjs/operators';
import type { RootState } from '..';
import { clientsEpics } from './client';
import { carsEpics } from './car';
import { repairsEpics } from './repair';

const epic = [...clientsEpics, ...carsEpics, ...repairsEpics];

export const rootEpic: Epic<any, any, RootState, any> = (action$, store$, dependencies) =>
  combineEpics<Epic<any, any, RootState, any>>(...epic)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );
