import {Dispatch} from "redux"
import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_LOGIN_DATA = 'SET-LOGIN-DATA'

let initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLoginData>


export type InitialStateType = {
    id: number,
    login: string,
    email: string
    isAuth: boolean
}


const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
}) as const

export const setLoginData = (email: string, password: string, rememberMe: boolean) => ({
    type: SET_LOGIN_DATA,
    data: {email, password, rememberMe}
}) as const


export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionsTypes>) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email))
            }
        })
    }
}


export const loginData = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: AppThunkDispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                console.log('response', response)
                dispatch(setLoginData(email, password, rememberMe))
                dispatch(getAuthUserData())
            }
            // dispatch(getAuthUserData())
        })
    }
}


export default authReducer