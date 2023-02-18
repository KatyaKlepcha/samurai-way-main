import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={'https://merehead.com/blog/wp-content/uploads/Artistic-chaos-but-at-a-moderate-scale.jpg'} alt={'logo'}></img>
            <div className={s.loginBlock}>
                {!props.isAuth ? <NavLink to={'/login'}>Login</NavLink> : <div className={s.login}>{props.login}</div>}
            </div>
        </header>
    )
}

export default Header;