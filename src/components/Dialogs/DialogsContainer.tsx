import React from "react";
import {InitialStateType, sendNewMessageActionCreator} from "../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

type MapStateToProps = {
    dialogsPage: InitialStateType
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchPropsType = {
    onSendMessage: (newMessageBody: string ) => void
}

export type DialogsType = MapStateToProps & MapDispatchPropsType


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onSendMessage: (newMessageBody: string) => {
            dispatch(sendNewMessageActionCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(withAuthRedirect,connect(mapStateToProps, mapDispatchToProps))(Dialogs)