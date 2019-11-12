import * as Types from '../constant/Actiontype';
import callAPI from "utils/apiCaller";

export const actAddUserRequest = (user) => {
    return dispath => {
        return callAPI('user/create', 'POST', user).then(res => {
            console.log(res);

            // dispath(actAddPost(res.data))
        });
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}