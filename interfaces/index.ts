export interface BaseResponse {
  code: number;
  success: boolean;
  message: string;
}

export interface DataResponse<T> extends BaseResponse {
  success: true;
  data: T;
}

export interface ErrorResponse extends BaseResponse {
  success: false;
}

export interface Client {
  _id?: string;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
}

export interface Car {
  _id?: string;
  client: string;
  carModel: string;
  year: string;
  placa: string;
  valves: string;
  oil: string;
  photo: string;
}

export interface Repair {
  _id?: string;
  car: string;
  client?: string;
  cost: number;
  date: string | Date;
  type: string;
}
