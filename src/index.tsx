import React from 'react';
import store from './components/redux/redux-store';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import { Provider } from './StoreContext';


const rerenderEntireTree = () => {
        ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>,
            document.getElementById('root')
        )
    }
;

rerenderEntireTree()

store.subscribe(rerenderEntireTree)
