import {AUTH_USER, AUTH_ERR} from "../actions/types";
import axios from 'axios';


export const signup = (formProps, callback) => async dispatch => {
    try {
        const res = await axios.post('/signup', formProps);
        dispatch({type: AUTH_USER, payload: res.data.token});
        localStorage.setItem('token', res.data.token);
        callback()
    } catch (e) {
        dispatch({type: AUTH_ERR, payload: 'Email in use'})
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
};

export const signin = (formProps, callback) => async (dispatch) => {
    try {
        const res = await axios.post('/signin', formProps);
        dispatch({type: AUTH_USER, payload: res.data.token});
        localStorage.setItem('token', res.data.token);
        callback()
    } catch (e) {
        dispatch({type: AUTH_ERR, payload: 'Invalid login credentials'})
    }
};