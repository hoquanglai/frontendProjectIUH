import axios from "axios";

export default function callAPI(endpoint, method, body) {
    return axios({
        method: method,
        url: endpoint,
        data: body,
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
    }).catch(err => {
        console.log(err);

    })
}