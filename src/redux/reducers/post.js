import * as Types from '../constant/Actiontype';


var initialState = [];

const post = (state= initialState, action) => {
    switch(action.type) {
        case Types.LIST_POST:
            // console.log(action.posts);
            state = action.posts.post;
            return [...state];
        case Types.ADD_POST:
            state.push(action.post);
            return [...state];
        default: return [...state];
    }
};

export default post;