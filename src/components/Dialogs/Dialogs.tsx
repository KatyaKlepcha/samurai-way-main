import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
} from "../redux/store";
import { sendNewMessageActionCreator, updateNewMessageActionCreator } from "../redux/dialogsReducer";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {

    let newMessageBody = props.state.newMessageBody

    //const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const onSendMessage = () => {
        props.dispatch(sendNewMessageActionCreator())
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let message = newMessageRef.current?.value
        let message = e.currentTarget.value
        console.log('message', message)
        props.dispatch(updateNewMessageActionCreator(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {/*<Dialog name={'Nastya'} id={1}/>*/}
                {/*<Dialog name={'Natalya'} id={2}/>*/}
                {/*<Dialog name={'Denis'} id={3}/>*/}
                {/*<Dialog name={'Yura'} id={4}/>*/}
                {/*<div className={s.dialog}><NavLink to={'/dialog/2'}>Natalya</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to={'/dialog/3'}>Denis</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to={'/dialog/4'}>Yura</NavLink></div>*/}
                {props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(m => <Message text={m.text}/>)}
            </div>
            <div className={s.sendMessage}>
                <textarea value={newMessageBody} onChange={onChangeMessage}/>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs