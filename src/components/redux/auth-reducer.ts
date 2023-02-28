import {Dispatch} from "redux"
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'

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

        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {id, login, email}
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


export default authReducer