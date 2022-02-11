// imports
import React from "react";
import s from './Header.module.css'
import logo from '../../assets/LOGO_PORTFOLIO.png'

// component
export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_container}>
                <div className={s.logo_header_block}>
                    <img alt={'logo'} src={logo} className={s.logo}/>
                    <>MARINADE.DEV</>
                </div>
                <div className={s.nav}>
                    <a href={'#'}>Home</a>
                    <a href={'#'}>Skills</a>
                    <a href={'#'}>Projects</a>
                    <a href={'#'}>Contacts</a>
                </div>
                <div className={s.send_me_block}>
                    <button className={s.send_me_button_nav}>send me</button>
                </div>
            </div>
        </div>
    )
}