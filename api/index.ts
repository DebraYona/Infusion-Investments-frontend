import { RestAPI } from './backend-api';
import clientService from './client';
import repairService from './repair';
import carService from './car';

const apiSingleton = new RestAPI();

export default {
  client: clientService(apiSingleton),
  repair: repairService(apiSingleton),
  car: carService(apiSingleton),
};
