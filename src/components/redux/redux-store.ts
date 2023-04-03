import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsTypes} from "./profileReducer";
import dialogsReducer, {DialogActionsTypes} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {UsersActionsTypes} from "./usersReducer";
import authReducer, {AuthActionsTypes} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer from "./app-reducer";

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

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
type StoreType = typeof store;

// @ts-ignore
window.store = store

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction> //типизация кастомного хука
export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector


export type ActionsTypes =
    ProfileActionsTypes
    | DialogActionsTypes
    | AuthActionsTypes
    | UsersActionsTypes

export default store;