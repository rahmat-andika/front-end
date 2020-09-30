import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home.jsx';

import { createStore } from 'redux';
import {Provider} from 'react-redux';

const globalState = {
    totalOrder: 5
}

// Reducer
const rootReducer = (state = globalState, action) => {
    if(action.type === 'PLUS_ORDER'){
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }

    if(action.type === 'MINUS_ORDER'){
        return {
            ...state,
            totalOrder: state.totalOrder - 1
        }
    }
    return state;
}

// store
const storeRedux = createStore(rootReducer);

ReactDOM.render(
    <Provider store={storeRedux}><Home /></Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
