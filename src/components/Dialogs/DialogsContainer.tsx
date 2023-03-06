import React from "react";
import {InitialStateType, sendNewMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().dialogsPage
//
//                 let newMessageBody = state.newMessageBody
//
//                 //const newMessageRef = React.createRef<HTMLTextAreaElement>()
//
//                 const onSendMessage = () => {
//                     store.dispatch(sendNewMessageActionCreator())
//                 }
//
//                 const onChangeMessage = (message: string) => {
//                     //let message = newMessageRef.current?.value
//                     store.dispatch(updateNewMessageActionCreator(message))
//                 }
//
//                 return (
//                     <Dialogs onChangeMessage={onChangeMessage} onSendMessage={onSendMessage}
//                              newMessageBody={newMessageBody}
//                              dialogsPage={state}/>
//                 )
//             }}
//
//         </StoreContext.Consumer>
//     )
// }

type MapStateToProps = {
    dialogsPage: InitialStateType
    newMessageBody: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

type MapDispatchPropsType = {
    onSendMessage: () => void
    onChangeMessage: (message: string)=> void
}

export type DialogsType = MapStateToProps & MapDispatchPropsType


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSendMessage: () => {
            dispatch(sendNewMessageActionCreator())
        },
        onChangeMessage: (message: string) => {
            dispatch(updateNewMessageActionCreator(message))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer