import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";

const Navbar = () => {

    const userId = useSelector<AppStateType, number>(state => state.auth.id)
    return (
        <nav className={s.nav}>
            <div className={`${s.item}`}><NavLink to={'/profile/' + userId} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}><NavLink to={'/messages'} activeClassName={s.active}>Messages</NavLink></div>
            <div className={`${s.item}`}><NavLink to={'/users'} activeClassName={s.active}>Users</NavLink></div>
            <div className={`${s.item}`}><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
            <div className={`${s.item}`}><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></div>
            <div className={`${s.item}`}><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    )
}

export default Navbar