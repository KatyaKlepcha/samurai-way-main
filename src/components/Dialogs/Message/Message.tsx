import s from "../Dialogs.module.css";

type MessagePropsType = {
    text: string
}


const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>
}

export default Message