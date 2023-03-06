import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
//
// type DialogsPropsType = {
//     // state: DialogsPageType
//     // dispatch: (action: ActionsTypes) => void
//     dialogsPage: DialogsPageType
//     onChangeMessage: (message: string) => void
//     onSendMessage: () => void
//     newMessageBody: string
//     // dialogs: Array<DialogsType>
//     // messages: Array<MessagesType>
// }

const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage

    let newMessageBody = state.newMessageBody

    //const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const onSendMessage = () => {
        props.onSendMessage()
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //let message = newMessageRef.current?.value
        let message = e.currentTarget.value

        props.onChangeMessage(message)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
                {state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {state.messages.map(m => <Message key = {m.id} text={m.text}/>)}
            </div>
            <div className={s.sendMessage}>
                <textarea value={newMessageBody} onChange={onChangeMessage}/>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs