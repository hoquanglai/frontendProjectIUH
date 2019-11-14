import axios from "axios";

export default function callAPI(endpoint, method, body, header) {
    return axios({
        method: method,
        url: `http://192.168.68.110:5000/${endpoint}`,
        data: body,
        headers: {
            'Content-Type': 'application/json',
            'auth-token': header
        },
        withCredentials: true,
        credentials: 'same-origin',
    }).catch(err => {
        // console.log(err);

    })
}