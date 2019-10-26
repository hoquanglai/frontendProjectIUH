import * as Types from '../constant/Actiontype';


var initialState = [];

const post = (state= initialState, action) => {
    switch(action.type) {
        case Types.ADD_POST:
            state.push(action.post);
            return [...state];
        default: return [...state];
    }
};

export default post;