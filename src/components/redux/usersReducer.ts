
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type ActionsTypes = ReturnType<typeof followAC>  | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

let initialState = {
    users: []
}

export type InitialStateType = UsersType

export type UsersType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    followed: boolean
    photoURL: string
    name: string
    status: string
    photos: PhotosType
    location: LocationType
}

type PhotosType = {
    large: string | undefined
    small: string | undefined
}

type LocationType = {
    city: string
    country: string
}


const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: true} : u)
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {
                ...state, users: action.users
            }

        default:
            return state
    }
}

export const followAC = (userID: number) => ({
    type: FOLLOW,
    userID
}) as const

export const unfollowAC = (userID: number) => ({
    type: UNFOLLOW,
    userID
}) as const

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
}) as const


export default usersReducer