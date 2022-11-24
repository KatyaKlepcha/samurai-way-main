import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}


const DialogItem = (props: DialogPropsType) => {
    const path = `${/messages/}${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem