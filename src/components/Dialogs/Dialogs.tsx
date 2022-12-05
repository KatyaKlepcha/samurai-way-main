import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, RootStateType} from "../redux/state";

type DialogsPropsType = {

    state: DialogsPageType
    // dialogs: Array<DialogsType>
    // messages: Array<MessagesType>
}

const Dialogs = (props: DialogsPropsType) => {

    const newMessageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage = ()=>{
        let message = newMessageRef.current?.value
        alert(message)
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
                {props.state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(m=><Message text={m.text}/>)}
            </div>
            <textarea ref={newMessageRef}/>
            <button onClick={addMessage}>Send message</button>
        </div>
    )
}

export default Dialogs