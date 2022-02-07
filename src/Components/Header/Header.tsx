// imports
import React from "react";
import s from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {Logo} from "../Logo/Logo";


// component
export const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.HeaderDesktop}>
                <Logo/>
                <Nav/>
                <UniversalButton title={'email'}/>
            </div>
            <div className={s.HeaderMobile}>
                <button className={s.burgerMenu}>menu</button>
                <Logo/>
            </div>
        </div>
    )
}