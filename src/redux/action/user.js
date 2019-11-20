import * as Types from '../constant/Actiontype';
import callAPI from "utils/apiCaller";


export const actLogInUserRequest = (user, cb) => {
    return dispath => {
        return callAPI('user/login', 'POST', user, null).then(res => {
            if (res) {
                cb(res);
                dispath(actLogInUser(res.data))
            }
        });
    }
}

export const actGetUserRequest = (token) => {
    return dispath => {
        return callAPI('user/currentUser', 'GET', null, token).then(res => {
            if (res) {
                dispath(actAddUser(res.data))
            }
        });
    }
}

export const actLogOutUserRequest = () => {    
    return dispath => {
        return callAPI('user/logout', 'GET', null).then(res => {
            dispath(actLogOutUser(res.data))
        });
    }
}

export const actAddUserRequest = (user, cb) => {
    return dispath => {
        return callAPI('user/create', 'POST', user).then(res => {
            if (res) {
                cb(res);
                dispath(actAddUser(res.data))
            }
        });
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const actLogOutUser = (user) => {
    return {
        type: Types.LOGOUT_USER,
        user
    }
}

export const actLogInUser = (user) => {
    return {
        type: Types.LOGIN_USER,
        user
    }
}