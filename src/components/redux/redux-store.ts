import {combineReducers, createStore} from "redux";
import profileReducer, {
    addNewPostActionCreator, ProfileActionsTypes,
    setUserProfile,
    updateNewPostTextActionCreator
} from "./profileReducer";
import dialogsReducer, {
    DialogActionsTypes,
    sendNewMessageActionCreator,
    updateNewMessageActionCreator
} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer
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

export default store;