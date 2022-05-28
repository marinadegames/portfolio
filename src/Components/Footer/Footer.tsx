import React from "react"
import s from './Footer.module.css'
import git_icon from '../../assets/github.png'
import mail_icon from '../../assets/icons8-gmail-150.png'
import linkedin_icon from '../../assets/linkedin.png'
import telegram from '../../assets/telegram.png'

export const Footer = () => {
    return (
        <div className={s.footer} id={'footer'}>
            <div className={s.footer_container}>
                <h2>Eugene Pashkevich</h2>
                <div className={s.icons_box}>
                    <a href={'https://t.me/eugenepash'}><img alt={'icon'} src={telegram}/></a>
                    <a href={'https://github.com/marinadegames'}><img alt={'icon'} src={git_icon}/></a>
                    <a href={'mailto:eugenepash@gmail.com'}><img alt={'icon'} src={mail_icon}/></a>
                    <a href={'www.linkedin.com/in/eugenepash'}><img alt={'icon'} src={linkedin_icon}/></a>
                </div>
                <p>© 2022 All rights reserved</p>
            </div>
        </div>
    )
}
