import React, from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType} from "./DialogsContainer";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../redux/redux-store";
import {sendNewMessageActionCreator} from "../redux/dialogsReducer";


type FormValues = {
    message: string
};


const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage


    const {
        register, //позволяет регистрировать различные поля для формы
        handleSubmit,  //обертка над нашим кастомным хэндлером отправки формы. позволяет сделать то, что например связано с валидацией
        reset
    } = useForm<FormValues>({
        mode: "onBlur"
    })

    const dispatch = useAppDispatch()


    const onSubmit: SubmitHandler<FormValues> = ({message}) => {
        // alert(JSON.stringify(data))
        dispatch(sendNewMessageActionCreator(message))
        reset()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {state.messages.map(m => <Message key={m.id} text={m.text}/>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.sendMessage}>
                <textarea {...register('message')}/>
                <button type={'submit'}>Send message</button>
            </form>
        </div>
    )
}

export default Dialogs