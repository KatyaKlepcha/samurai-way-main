import {Dispatch} from "redux";
import {PhotosType, ProfileType} from "../Profile/ProfileContainer";
import {profileAPI} from "../api/api";


const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const DELETE_POST = 'profile/DELETE-POST'
const SET_PHOTO_SUCCESS = 'profile/SET-PHOTO-SUCCESS'

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
    | ReturnType<typeof setPhotoSuccess>

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

        case SET_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos}
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

export const setPhotoSuccess = (photos: PhotosType) => ({
    type: SET_PHOTO_SUCCESS,
    photos
}) as const


export const getUserProfile = (userId: number) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data)
    )

}

export const getStatus = (userId: number) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data)
    )
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch<ProfileActionsTypes>) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}


export default profileReducer