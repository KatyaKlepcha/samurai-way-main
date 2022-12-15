import {ActionsTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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