const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let store: StoreType = {
    _state: {
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
            ],
            newMessageBody: '',
        },
        profilePage: {
            posts: [
                {id: 1, message: 'hello, let\'s meet today?', likesCount: 15},
                {id: 2, message: 'did you see my message?', likesCount: 20},
            ],
            newPostText: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Nastya'},
                {id: 1, name: 'Nata'},
                {id: 1, name: 'Alyona'},
            ]
        }
    },
    _callSubscriber() {
        console.log('changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            const newMessage: MessagesType = {
                id: 5,
                text: this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber()
        }
    }
}

type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    subscribe: (observer: () => void) => void
}

export const addNewPostActionCreator = () => ({
    type: ADD_POST
}) as const

export const updateNewPostTextActionCreator = (newPostText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText
}) as const

export const sendNewMessageActionCreator = () => ({
    type: SEND_MESSAGE,
}) as const

export const updateNewMessageActionCreator = (newMessageBody: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody
}) as const

export type ActionsTypes =
    ReturnType<typeof addNewPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendNewMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>

export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
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


export default store