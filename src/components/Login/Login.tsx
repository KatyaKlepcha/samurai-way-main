import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import LoginForm from "./LoginForm";
import {Redirect} from "react-router-dom";

const Login = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    if (isAuth){
        return <Redirect to={'/profile'}></Redirect>
    }
    return (
        <div>
            {!isAuth && 'LOGIN'}
            <LoginForm/>
        </div>
    )
        ;
};

export default Login;