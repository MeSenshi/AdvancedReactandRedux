import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import reducers from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, {auth:{authenticated:localStorage.getItem('token')}}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feature" component={Feature}/>
                <Route path="/signout" component={Signout}/>
                <Route path="/signin" component={Signin}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
