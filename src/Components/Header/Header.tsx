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
            <Logo/>
            <Nav/>
            <UniversalButton title={'email'}/>
        </div>
    )
}