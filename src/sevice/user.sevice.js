import apis from '../constants/api';
import factoryService from './factory.service';
// const api = "account";
const api = apis.USER_API;

const accountService = factoryService(api);

export default accountService;