import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import reducers from './reducers';
// import reduxPromise from 'redux-promise';
// import reduxThunk from 'redux-thunk';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';


export default ({children, initialState}) => {
    // const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));
    const store = createStore(reducers, initialState, applyMiddleware(async,stateValidator));
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};