const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

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
}

export type DialogActionsTypes = ReturnType<typeof sendNewMessageActionCreator>

export type InitialStateType = DialogsPageType

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    text: string
}


const dialogsReducer = (state: InitialStateType = initialState, action: DialogActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:

            return {
                ...state,
                messages: [...state.messages, {id: 5, text: action.newMessageBody}],
            }

        default:
            return state
    }
}

export const sendNewMessageActionCreator = (newMessageBody: string) => ({
    type: SEND_MESSAGE, newMessageBody
}) as const


export default dialogsReducer