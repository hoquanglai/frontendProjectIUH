import * as Types from '../constant/Actiontype';


var initialState = [];

const user = (state= initialState, action) => {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case Types.ADD_USER:
            console.log(action.user);
            
            newState = action.user;
            return newState;
        case Types.LOGOUT_USER:
            // state.push(action.post);
            newState = action.user;

            return newState;
        default: return state;
    }
};

export default user;