import React from "react";
import s from './Header.module.css'

const Header =()=>{
    return(
        <header className={s.header}>
            <img src={'https://merehead.com/blog/wp-content/uploads/Artistic-chaos-but-at-a-moderate-scale.jpg'}></img>
        </header>
    )
}

export default Header;