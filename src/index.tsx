import React from 'react';
import store from './components/redux/state';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = ()=> {
        ReactDOM.render(
            <BrowserRouter>
                <App state={store.getState()}/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
;

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
