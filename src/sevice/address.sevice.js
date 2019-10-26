import apis from '../constants/api';
import factoryService from './factory.service';
// const api = "account";
const api = apis.ADDRESS_API;

const addressService = factoryService(api);

export default addressService;