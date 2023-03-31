import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from './LoginForm.module.css'
import {loginData} from "../redux/auth-reducer";
import {useAppDispatch} from "../redux/redux-store";

type FormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
};

const LoginForm = () => {
    const {
        register, //позволяет регистрировать различные поля для формы
        formState: {
            errors, isValid
        },
        handleSubmit,  //обертка над нашим кастомным хэндлером отправки формы. позволяет сделать то, что например связано с валидацией
        reset
    } = useForm<FormValues>({
        mode: "onBlur"
    })

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FormValues> = ({email, password, rememberMe}) => {
        // alert(JSON.stringify(data))
        dispatch(loginData(email, password, rememberMe))
        reset()
    }

    console.log('render')
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <label> Email:
                <input placeholder={'Email'} {...register('email', {
                    required: 'The field is required'
                })}/>
            </label>
            <div className={s.error}>{errors?.email && <p>{errors?.email?.message || "Error"}</p>}</div>

            <label> Password:
                <input placeholder={'Password'} type={'password'} {...register('password', {
                    required: 'The field is required',
                    // minLength: {
                    //     value: 5,
                    //     message: "Password at least 5 characters"
                    // }
                })}/>
            </label>
            <div className={s.error}>{errors?.password && <p>{errors?.password?.message || "Error"}</p>}</div>
            <label>
                <input type={'checkbox'}  {...register("rememberMe")} />remember me
            </label>
            <input type={'submit'} value={'Log in'} disabled={!isValid}/>
        </form>
    );
};

export default LoginForm;