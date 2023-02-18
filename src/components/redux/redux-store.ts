import {combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";

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

let store = createStore(rootReducer);
type StoreType = typeof store;

// @ts-ignore
window.store = store

export type ActionsTypes =
    ProfileActionsTypes
    | DialogActionsTypes
    | AuthActionsTypes

export default store;