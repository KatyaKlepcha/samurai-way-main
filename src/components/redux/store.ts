import profileReducer, {addNewPostActionCreator, updateNewPostTextActionCreator} from "./profileReducer";
import dialogsReducer, { sendNewMessageActionCreator, updateNewMessageActionCreator } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


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
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
    subscribe: (observer: () => void) => void
}


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

export type FriendsType = {
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