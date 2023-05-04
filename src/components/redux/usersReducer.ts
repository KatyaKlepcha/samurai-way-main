import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {updateFollowUnfollowInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IN_FOLLOWING_PROGRESS = 'users/TOGGLE-IN-FOLLOWING-PROGRESS'

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
                //...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: true} : u)
                ...state, users: updateFollowUnfollowInArray(state.users, action.userID, {followed: true})
            }

        case UNFOLLOW:
            return {
                //...state, users: state.users.map((u) => u.id === action.userID ? {...u, followed: false} : u)
                ...state, users: updateFollowUnfollowInArray(state.users, action.userID,  {followed: false})
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


export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionsTypes>) => {
    dispatch(toggleIsFetching(true))
    // dispatch(setCurrentPage(currentPage))

    const data = await usersAPI.getUsers(currentPage, pageSize)
    //dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch: Dispatch<UsersActionsTypes>, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleInFollowingProgress(userId, true))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleInFollowingProgress(userId, false))
    }
}


export const follow = (userId: number) => {
    return async (dispatch: Dispatch<UsersActionsTypes>) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
    }
}

export const unFollow = (userId: number) => async (dispatch: Dispatch<UsersActionsTypes>) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(userId), unFollowSuccess)
}


export default usersReducer