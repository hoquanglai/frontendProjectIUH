import * as Types from '../constant/Actiontype';
import callAPI from "utils/apiCaller";


export const actAddPostRequest = (post) => {
    return dispath => {
        if (post) {
            post.loadFile = [];
        }
        console.log(post);
        const data = new FormData();
        data.append('file', post.file);
        data.append('post', JSON.stringify(post.post));
        
        return callAPI('post/create', 'POST', data).then(res => {
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