// imports
import React from "react";
import s from './NavBurger.module.css'



// component
export const NavBurger = () => {
    return (
        <div className={s.NavBurger}>
            <a href={'#'}>Home</a>
            <a href={'#'}>Works</a>
            <a href={'#'}>Projects</a>
            <a href={'#'}>Contacts</a>
        </div>
    )
}
