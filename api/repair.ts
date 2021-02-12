import { Repair } from '../interfaces';
import { RestAPI } from './backend-api';

const repairService = (api: RestAPI) => {
  return {
    getAll: () => {
      return api.get<Repair[]>('/repair/list');
    },
    getForCar: (carId: string) => {
      return api.get<Repair[]>(`/repair/car/${carId}`);
    },
    create: (newRepair: Repair) => {
      return api.post<Repair>('/repair/', newRepair);
    },
    delete: (repairId: string) => {
      return api.delete<number>(`/repair/${repairId}`);
    },
    update: (repairId: string, newRepair: Partial<Repair>) => {
      return api.update<Repair>(`/repair/${repairId}`, newRepair);
    },
  };
};

export default repairService;
