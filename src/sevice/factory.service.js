import axios from 'axios';

export default function (api) {
  return {
    findAll: () => {
      return axios.get(`${api}/all`);
      // return [{lai : '123'}, {lai: '1221'}];
      // .then(response => console.log(response.data) );
    // console.log("dfd")
    },
    findOneById: (id) => {
      return axios.get(`${api}/${id}`);
    },
    delete: (id) => {
      return axios.delete(`${api}/${id}`);
    },
    create: (data) => {
      return axios.post(api, data);
    },
    update: (data, id) => {
      return axios.put(`${api}/${id}`, data);
    }
  };
}
