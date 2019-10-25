/* eslint-disable */
const URL_API = process.env.REACT_APP_URL_API || '';
// const URL_API = 'https://protected-wave-31261.herokuapp.com';

const apis = {
    URL_API: URL_API,
    USER_API: `${URL_API}/account`,
    PRODUCT_API: `${URL_API}`,
    ADDRESS_API: `${URL_API}/address`
}

export default apis;
