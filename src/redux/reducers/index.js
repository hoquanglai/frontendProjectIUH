import { combineReducers } from "redux";
import posts from './post';

const appReducer = combineReducers({
    posts
});

export default appReducer;