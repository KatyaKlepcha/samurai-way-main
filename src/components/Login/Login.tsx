import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import LoginForm from "./LoginForm";

const Login = () => {
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    return (
        <div>
            {!isAuth && 'LOGIN'}
            <LoginForm/>
        </div>
    )
        ;
};

export default Login;