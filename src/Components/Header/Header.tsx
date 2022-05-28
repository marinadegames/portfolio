import React, {useState} from "react";
import s from './Header.module.css'
import logo from '../../assets/LOGO_PORTFOLIO.png'

export const Header = () => {

    const [burger, setBurger] = useState<boolean>(false)
    const openMenu = () => {
        setBurger(!burger)
    }

    return (
        <div>
            <div className={s.header} id={'home'}>
                <div className={s.header_container}>
                    <div className={s.logo_header_block}>
                        <img alt={'logo'} src={logo} className={s.logo}/>
                        <>MARINADE.DEV</>
                    </div>
                    <div className={s.nav}>
                        <a href={'#home'}>Home</a>
                        <a href={'#skills'}>Skills</a>
                        <a href={'#myWorks'}>Projects</a>
                        <a href={'#footer'}>Contacts</a>
                    </div>
                    <div className={s.send_me_block}>
                        <a href={'#writeMe'}>
                            <button className={s.send_me_button_nav}>send me</button>
                        </a>
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
                        <a href={'#skills'}>
                            <div className={s.mobile_menu_item}>Skills</div>
                        </a>
                        <a href={'#myWorks'}>
                            <div className={s.mobile_menu_item}>Projects</div>
                        </a>
                        <a href={'#footer'}>
                            <div className={s.mobile_menu_item}>Contacts</div>
                        </a>
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
