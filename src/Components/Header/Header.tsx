// imports
import React, {useState} from "react";
import s from './Header.module.css'
import {Nav} from "../Nav/Nav";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {Logo} from "../Logo/Logo";
import {NavBurger} from "../NavBurger/NavBurger";


// component
export const Header = () => {

    const [openNav, setOpenNav] = useState<boolean>(false)

    const onClickMenuHandler = () => {
        setOpenNav(!openNav)
    }

    return (
        <>
            <div className={s.Header}>
                <div className={s.HeaderDesktop}>
                    <Logo/>
                    <Nav/>
                    <UniversalButton title={'email'}/>
                </div>
                <div className={s.HeaderMobile}>
                    <button className={s.burgerMenu} onClick={onClickMenuHandler}>menu</button>

                    <Logo/>

                </div>

            </div>
            {openNav ? <NavBurger/> : ''}
        </>
    )
}