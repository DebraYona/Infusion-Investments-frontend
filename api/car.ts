import { Car } from '../interfaces';
import { RestAPI } from './backend-api';

const carService = (api: RestAPI) => {
  return {
    getByClient: (client: string) => {
      return api.get<Car[]>(`/car/client/${client}`);
    },
    create: (newCar: Car) => {
      return api.post<Car>('/car/', newCar);
    },
  };
};

export default carService;
