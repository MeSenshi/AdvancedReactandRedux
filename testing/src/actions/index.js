import {SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH} from "../actions/types";
import axios from 'axios';


export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const res = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: res
    }
}


// export  function fetchComments() {
//     return async function (dispatch) {
//         const res = await axios.get('http://jsonplaceholder.typicode.com/comments');
//
//         return dispatch({
//             type: FETCH_COMMENTS,
//             payload: res
//         })
//     }
// }



    export function changeAuth(isLoggedIn) {
        return {
            type: CHANGE_AUTH,
            payload: isLoggedIn
        }
    }