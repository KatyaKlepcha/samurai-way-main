import {Dispatch} from "redux";
import {ProfileType} from "../Profile/ProfileContainer";
import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

let initialState = {
    posts: [
        {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
        {id: 2, message: 'did you see my message?', likesCount: 20},
    ],
    profile: null,
    status: ''
}

export type InitialStateType = ProfilePageType

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status?: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileActionsTypes = ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case DELETE_POST: {
            return {
                ...state,
               posts: state.posts.filter(p => p.id !== action.postId)
            }
        }

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}


export const addNewPostActionCreator = (newPostText: string) => ({
    type: ADD_POST, newPostText
}) as const

export const deletePost = (postId: number) => ({
    type: DELETE_POST, postId
}) as const

export const setUserProfile = (profile: ProfileType | null) => ({
    type: SET_USER_PROFILE,
    profile
}) as const

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
}) as const


export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getProfile(userId).then((response: any) => {
            dispatch(setUserProfile(response.data)
            )
        })
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.getStatus(userId).then((response: any) => {
            dispatch(setStatus(response.data)
            )
        })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        profileAPI.updateStatus(status).then((response: any) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
    }
}


export default profileReducer