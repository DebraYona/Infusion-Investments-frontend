import { Car, Client, Repair } from '.';

export interface ClientState {
  address: string;
  firstName: string;
  lastName: string;
  city: string;
  clientList: Client[];
}

export interface CarState {
  client: string;
  carModel: string;
  year: string;
  placa: string;
  valves: string;
  oil: string;
  photo: string;
  carList: Car[];
}

export interface RepairState {
  car: string;
  cost: number;
  date: number;
  type: string;
  repairList: Repair[];
  editingId: string | null;
}
