import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const Login = () => {
    const isAuth = useSelector((state:AppStateType)=>state.auth.isAuth)
    return (
        <div>
            {!isAuth && 'LOGIN'}
        </div>
    );
};

export default Login;