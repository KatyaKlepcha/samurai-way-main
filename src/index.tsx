import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux';
import store from "./components/redux/redux-store";


ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
;

// rerenderEntireTree()

// store.subscribe(rerenderEntireTree)
