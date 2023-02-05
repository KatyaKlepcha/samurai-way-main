import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
        {id: 2, message: 'did you see my message?', likesCount: 20},
    ],
    newPostText: '',
}

export type InitialStateType = ProfilePageType

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
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