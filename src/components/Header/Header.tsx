import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../redux/redux-store";
import {logout} from "../redux/auth-reducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={s.header}>
            <img src={'https://merehead.com/blog/wp-content/uploads/Artistic-chaos-but-at-a-moderate-scale.jpg'}
                 alt={'logo'}></img>
            <div className={s.loginBlock}>
                {!props.isAuth
                    ? <NavLink to={'/login'}>Login</NavLink>
                    : <div className={s.loginWrapper}>
                        <div className={s.login}>{props.login}</div>
                        <button onClick={onClickHandler}>Log out</button>
                    </div>}
            </div>
        </header>
    )
}

export default Header;