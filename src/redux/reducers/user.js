import * as Types from '../constant/Actiontype';


var initialState = [];

const user = (state= initialState, action) => {
    switch(action.type) {
        case Types.ADD_USER:
            // state = state.concat(action.posts.post);
            return [...state];
        case Types.LIST_POST:
            // state.push(action.post);
            return [...state];
        default: return [...state];
    }
};

export default user;