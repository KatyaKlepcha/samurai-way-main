import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {UsersActionsTypes} from "./usersReducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer
    }
)

export type AppStateType = ReturnType<typeof rootReducer>


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

//let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
type StoreType = typeof store;

// @ts-ignore
window.__store__ = store

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction> //типизация кастомного хука
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector


export type ActionsTypes =
    ProfileActionsTypes
    | DialogActionsTypes
    | AuthActionsTypes
    | UsersActionsTypes

export default store;