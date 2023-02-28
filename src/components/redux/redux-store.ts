import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, { UsersActionsTypes } from "./usersReducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
type StoreType = typeof store;

// @ts-ignore
window.store = store

export type ActionsTypes =
    ProfileActionsTypes
    | DialogActionsTypes
    | AuthActionsTypes
    | UsersActionsTypes

export default store;