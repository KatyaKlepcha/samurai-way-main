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


export default authReducer