import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '..';

const carSelector = (state: RootState) => state.car;

export const clientSelector = createSelector(carSelector, (car) => car.client);
export const carModelSelector = createSelector(carSelector, (car) => car.carModel);
export const yearSelector = createSelector(carSelector, (car) => car.year);
export const placaSelector = createSelector(carSelector, (car) => car.placa);
export const valvesSelector = createSelector(carSelector, (car) => car.valves);
export const oilSelector = createSelector(carSelector, (car) => car.oil);
export const photoSelector = createSelector(carSelector, (car) => car.photo);

export const carFormSelector = createSelector(carSelector, (car) => {
  const { carList, ...newCar } = car;
  return newCar;
});

export const carsListSelector = createSelector(carSelector, (car) => car.carList);
