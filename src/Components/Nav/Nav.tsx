// imports
import React from "react";
import s from './Nav.module.css'



// component
export const Nav = () => {
    return (
        <div className={s.Nav}>
            <a href={'#'}>Home</a>
            <a href={'#'}>Works</a>
            <a href={'#'}>Projects</a>
            <a href={'#'}>Contacts</a>
        </div>
    )
}
