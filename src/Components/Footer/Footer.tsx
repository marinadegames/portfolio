// imports
import React from "react"
import s from './Footer.module.css'
import git_icon from '../../assets/github.png'
import mail_icon from '../../assets/icons8-gmail-150.png'
import linkedin_icon from '../../assets/linkedin.png'
import telegram from '../../assets/telegram.png'


// component
export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer_container}>
                <h2>Eugene Pashkevich</h2>
                <div className={s.icons_box}>
                    <img alt={'icon'} src={telegram}/>
                    <img alt={'icon'} src={git_icon}/>
                    <img alt={'icon'} src={mail_icon}/>
                    <img alt={'icon'} src={linkedin_icon}/>

                </div>
                <p>© 2022 All rights reserved</p>
            </div>
        </div>
    )
}