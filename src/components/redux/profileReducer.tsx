import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
        {id: 2, message: 'did you see my message?', likesCount: 20},
    ],
    newPostText: '',
}

type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state;
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

export default profileReducer