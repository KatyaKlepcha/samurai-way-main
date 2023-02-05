import {ActionsTypes} from "./store";

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

export type InitialStateType = DialogsPageType

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    text: string
}


const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody
            // const newMessage: MessagesType = {
            //     id: 5,
            //     text: body
            // }

            return {
                ...state,
                messages: [...state.messages, {id: 5, text: body}],
                newMessageBody: ''
            }
            // stateCopy.messages.push(newMessage)
            // stateCopy.newMessageBody = ''

        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newMessageBody}

        default:
            return state
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