// imports
import React from "react";
import s from './Footer.module.css'
import git_IMPORT from '../../assets/github.png'
import email_IMPORT from '../../assets/mail.png'
import linkedIn_IMPORT from '../../assets/linkedin.png'
import telegram_IMPORT from '../../assets/telegram.png'

// assets
const git_IMG = <img alt={'gitIcon'} src={git_IMPORT} className={s.iconLink}/>
const linkedIn_IMG = <img alt={'gitIcon'} src={linkedIn_IMPORT} className={s.iconLink}/>
const telegram_IMG = <img alt={'gitIcon'} src={telegram_IMPORT} className={s.iconLink}/>
const email_IMG = <img alt={'gitIcon'} src={email_IMPORT} className={s.iconLink}/>
// types


// component

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerBlockContainer}>
                <h2>Eugene Pashkevich</h2>
                <div className={s.iconsLink}>
                    {git_IMG}
                    {linkedIn_IMG}
                    {telegram_IMG}
                    {email_IMG}
                </div>
                <h4>© 2022 All rights reserved</h4>
            </div>

        </div>
    )
}