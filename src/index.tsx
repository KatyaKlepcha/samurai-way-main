import React from 'react';
import state from './components/redux/state';
import './index.css';
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state)
