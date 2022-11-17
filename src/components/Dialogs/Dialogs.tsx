import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    text: string
}

const Dialog = (props: DialogPropsType) => {
    const path = `${/messages/}${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                <Dialog name={'Nastya'} id={1}/>
                <Dialog name={'Natalya'} id={2}/>
                <Dialog name={'Denis'} id={3}/>
                <Dialog name={'Yura'} id={4}/>
                {/*<div className={s.dialog}><NavLink to={'/dialog/2'}>Natalya</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to={'/dialog/3'}>Denis</NavLink></div>*/}
                {/*<div className={s.dialog}><NavLink to={'/dialog/4'}>Yura</NavLink></div>*/}
            </div>
            <div className={s.messages}>
                <Message text={'Hi'}/>
                <Message text={'How are you?'}/>
                <Message text={'Let\'s meet today?'}/>
            </div>
        </div>
    )
}

export default Dialogs