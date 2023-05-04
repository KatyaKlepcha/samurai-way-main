import {getAuthUserData} from "./auth-reducer";
import {AppThunkDispatch} from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS'

let initialState = {
    initialized: false
}

export type AuthActionsTypes = ReturnType<typeof initializedSuccess>


export type InitialStateType = {
    initialized: boolean
}


const appReducer = (state: InitialStateType = initialState, action: AuthActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
}) as const

export const initializeApp = () => (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
}


export default appReducer