const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

type ActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false
}

export type InitialStateType = UsersType

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
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
                ...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const


export default usersReducer