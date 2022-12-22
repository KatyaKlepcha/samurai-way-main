import React from "react";
import {sendNewMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
            let state = store.getState().dialogsPage

            let newMessageBody = state.newMessageBody

            //const newMessageRef = React.createRef<HTMLTextAreaElement>()

            const onSendMessage = () => {
               store.dispatch(sendNewMessageActionCreator())
            }

            const onChangeMessage = (message: string) => {
                //let message = newMessageRef.current?.value
                store.dispatch(updateNewMessageActionCreator(message))
            }

            return (
                <Dialogs onChangeMessage={onChangeMessage} onSendMessage={onSendMessage} newMessageBody={newMessageBody}
                         dialogsPage={state}/>
            )
        }}

        </StoreContext.Consumer>
    )
}

export default DialogsContainer