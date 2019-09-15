import axios from 'axios';

export default function (api) {
  return {
    findAll: () => {
      return axios.get(`${api}/listt`).then(response => console.log(response.data) );
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
