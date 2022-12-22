import {ActionsTypes, DialogsPageType, MessagesType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
}

type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessagesType = {
                id: 5,
                text: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody
            return state;
        default: return state
    }
}

export const sendNewMessageActionCreator = () => ({
    type: SEND_MESSAGE,
}) as const

export const updateNewMessageActionCreator = (newMessageBody: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody
}) as const


export default dialogsReducer