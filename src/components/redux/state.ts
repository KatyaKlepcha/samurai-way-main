import {rerenderEntireTree} from "../../render";

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type ProfilePageType = {
    posts: Array<PostType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

type FriendsType = {
    id: number
    name: string
}


export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    text: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const state: RootStateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Nastya'},
            {id: 2, name: 'Natalya'},
            {id: 3, name: 'Denis'},
            {id: 4, name: 'Yura'}
        ],

        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, text: 'How are you?'},
            {id: 3, text: 'Let\'s meet today?'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
            {id: 2, message: 'did you see my message?', likesCount: 20},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Nastya'},
            {id: 1, name: 'Nata'},
            {id: 1, name: 'Alyona'},
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 3,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state