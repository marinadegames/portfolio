import s from './Footer.module.css'
import {Button} from "../Buttons/Button";
import email_red_icon from '../../Assets/Images/email_red.png'
import github_black_icon from '../../Assets/Images/git_black.png'
import telegram_icon from '../../Assets/Images/telegram_blue.png'
import linkedIn_icon from '../../Assets/Images/linkedin.png'
import {CSSProperties} from "react";

const btnStylesResponsive:CSSProperties = {
    width: window.screen.width < 1300 ? 500 : 200,
    height: window.screen.width < 1300 ? 120 : 60,
    justifyContent: "flex-start",
    fontSize: window.screen.width < 1300 ? 40 : 20,
    margin: window.screen.width < 1300 ? '20px 0 20px 0' : "auto"
}

export const Footer = () => {
    return (
        <div className={s.footer}>
            <span className={s.footerName}>Eugene Pashkevich</span>
            <div className={s.boxButtons} id={'footer'}>
                <a href={'mailto:eugenepash@gmail.com'} style={{textDecoration: 'none'}}>
                    <Button styles={btnStylesResponsive}
                            title={'Email'}
                            icon={email_red_icon}
                            color={"red"}/>
                </a>
                <a href={'https://github.com/marinadegames'} style={{textDecoration: 'none'}}>
                    <Button styles={btnStylesResponsive}
                            title={'GitHub'}
                            icon={github_black_icon}
                            color={"black"}/>
                </a>
                <a href={'https://t.me/eugenepash'} style={{textDecoration: 'none'}}>
                    <Button styles={btnStylesResponsive}
                            title={'Telegram'}
                            myColor={'#2BA0DA'}
                            icon={telegram_icon}/>
                </a>
                <a href={'https://www.linkedin.com/in/eugenepash/'} style={{textDecoration: 'none'}}>
                    <Button styles={btnStylesResponsive}
                            title={'Linkedin'}
                            myColor={'#0175AD'}
                            icon={linkedIn_icon}/>
                </a>
            </div>
            <span className={s.footerReserved}>© 2022 All rights reserved</span>
        </div>
    )
}


