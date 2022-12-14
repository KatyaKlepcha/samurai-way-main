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
            ]
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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
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

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

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