import {Dispatch} from "redux";
import {ProfileType} from "../Profile/ProfileContainer";
import {usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
        {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
        {id: 2, message: 'did you see my message?', likesCount: 20},
    ],
    newPostText: '',
    profile: null
}

export type InitialStateType = ProfilePageType

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileActionsTypes = ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        // stateCopy.posts = [...state.posts]
        // stateCopy.posts.push(newPost)
        // stateCopy.newPostText = ''
        // return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state, newPostText: action.newPostText
            }
        // stateCopy.newPostText = action.newPostText
        // return stateCopy;
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}


export const addNewPostActionCreator = () => ({
    type: ADD_POST
}) as const

export const updateNewPostTextActionCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
}) as const


export const setUserProfile = (profile: ProfileType | null) => ({
    type: SET_USER_PROFILE,
    profile
}) as const


export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileActionsTypes>) => {
        usersAPI.getProfile(userId).then((response: any) => {
            dispatch(setUserProfile(response.data)
            )
        })
    }
}


export default profileReducer