import { combineReducers } from "redux";
import posts from './post';
import user from './user';

const appReducer = combineReducers({
    posts,
    user
});

export default appReducer;