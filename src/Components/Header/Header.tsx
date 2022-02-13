// imports
import React, {useState} from "react";
import s from './Header.module.css'
import logo from '../../assets/LOGO_PORTFOLIO.png'

// component
export const Header = () => {

    const [burger, setBurger] = useState<boolean>(false)

    const openMenu = () => {
        setBurger(!burger)
    }

    return (
        <div>
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

            {burger ?

                <div className={s.header_mobile_open}>
                    <div className={s.header_mobile_container_open}>
                        <div className={s.logo_header_block}>
                            <img alt={'logo'} src={logo} className={s.logo}/>
                            <p>MARINADE.DEV</p>
                        </div>
                        <div className={s.div_container} onClick={openMenu}>
                            <div className={s.bar1_open}/>
                            <div className={s.bar2_open}/>
                            <div className={s.bar3_open}/>
                        </div>

                    </div>
                    <div className={s.open_menu_list_box}>
                        <div className={s.mobile_menu_item}>Home</div>
                        <div className={s.mobile_menu_item}>Skills</div>
                        <div className={s.mobile_menu_item}>Projects</div>
                        <div className={s.mobile_menu_item}>Contacts</div>
                    </div>
                </div>

                :
                <div className={s.header_mobile}>
                    <div className={s.header_mobile_container}>
                        <div className={s.logo_header_block}>
                            <img alt={'logo'} src={logo} className={s.logo}/>
                            <p>MARINADE.DEV</p>
                        </div>
                        <div className={s.div_container} onClick={openMenu}>
                            <div className={s.bar1}/>
                            <div className={s.bar2}/>
                            <div className={s.bar3}/>
                        </div>
                    </div>
                </div>
            }


        </div>

    )
}