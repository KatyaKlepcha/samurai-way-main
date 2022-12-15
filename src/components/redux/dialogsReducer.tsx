import {ActionsTypes, DialogsPageType, MessagesType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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