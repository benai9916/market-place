import React from "react";
import ReactDOM from "react-dom";
import './index.css';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './components/redux/reducers'

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
    document.getElementById('root'));