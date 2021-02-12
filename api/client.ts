import { Client } from '../interfaces';
import { RestAPI } from './backend-api';

const clientService = (api: RestAPI) => {
  return {
    getAll: () => {
      return api.get<Client[]>('/client/list');
    },
    create: (newClient: Client) => {
      return api.post<Client>('/client/', newClient);
    },
  };
};

export default clientService;
