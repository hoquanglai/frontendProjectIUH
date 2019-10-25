import * as Types from '../constant/Actiontype';
import callAPI from "utils/apiCaller";


export const actAddPostRequest = (post) => {
    return dispath => {
        return callAPI('post/create', 'POST', post).then(res => {
            console.log(res);
            
            // dispath(actAddPost(res.data))
        });
    }
}
export const actAddPost = (post) => {
    return {
        type: Types.ADD_POST,
        post
    }
}