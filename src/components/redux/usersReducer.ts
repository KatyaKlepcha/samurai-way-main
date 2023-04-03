import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IN_FOLLOWING_PROGRESS = 'TOGGLE-IN-FOLLOWING-PROGRESS'

export type UsersActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleInFollowingProgress>

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: []
}

export type InitialStateType = UsersType

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<number>
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


const usersReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
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
        case TOGGLE_IN_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({
    type: FOLLOW,
    userID
}) as const

export const unFollowSuccess = (userID: number) => ({
    type: UNFOLLOW,
    userID
}) as const

export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
}) as const

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
}) as const

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const

export const toggleInFollowingProgress = (id: number, followingInProgress: boolean) => ({
    type: TOGGLE_IN_FOLLOWING_PROGRESS,
    id,
    followingInProgress
}) as const


export const requestUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toggleIsFetching(true))
        // dispatch(setCurrentPage(currentPage))

        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
            //dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}


export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toggleInFollowingProgress(userId, true))
        usersAPI.follow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
                dispatch(toggleInFollowingProgress(userId, false))
            }

        })
    }
}

export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsTypes>) => {
        dispatch(toggleInFollowingProgress(userId, true))
        usersAPI.unFollow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(unFollowSuccess(userId))
                dispatch(toggleInFollowingProgress(userId, false))
            }

        })
    }
}


export default usersReducer