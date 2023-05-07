import {authAPI} from "../api/api";
import {AppThunkDispatch} from "./redux-store";

const SET_USER_DATA = 'auth/SET-USER-DATA'

let initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: false
}

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>


export type InitialStateType = {
    id: number,
    login: string,
    email: string,
    isAuth: boolean
}


const authReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
}) as const


export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const loginData = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppThunkDispatch) => {
    const response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {

    }
}

export const logout = () => async (dispatch: AppThunkDispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(0, '', '', false))
    }
}


export default authReducer