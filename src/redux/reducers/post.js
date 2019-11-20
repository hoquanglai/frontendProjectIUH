import * as Types from '../constant/Actiontype';

var initialState = [];

const post = (state= initialState, action) => {
    switch(action.type) {
        case Types.LIST_POST:
            const newArray = arrayUnique(state.concat(action.posts.post));
            if (newArray.length > 0) {
                state = newArray;
            }
            return [...state];
        case Types.ADD_POST:
            console.log(action.post);
            
            state.push(action.post.post);
            // state = state.concat(action.post.post);

            return [...state];
        default: return [...state];
    }
};

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i]._id === a[j]._id)
                a.splice(j--, 1);
        }
    }

    return a;
}

export default post;