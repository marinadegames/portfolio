import s from './Footer.module.css'
import {Button} from "../Buttons/Button";
import email_red_icon from '../../Assets/Images/email_red.png'
import github_black_icon from '../../Assets/Images/git_black.png'
import telegram_icon from '../../Assets/Images/telegram_blue.png'
import linkedIn_icon from '../../Assets/Images/linkedin.png'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <span className={s.footerName}>Eugene Pashkevich</span>
            <div className={s.boxButtons} id={'footer'}>
                <Button styles={{width: 200, height: 60, justifyContent: "flex-start"}}
                        link={'mailto:eugenepash@gmail.com'}
                        title={'Email'}
                        icon={email_red_icon}
                        color={"red"}/>
                <Button styles={{width: 200, height: 60, justifyContent: "flex-start"}}
                        link={'https://github.com/marinadegames'}
                        title={'GitHub'}
                        icon={github_black_icon}
                        color={"black"}/>
                <Button styles={{width: 200, height: 60, justifyContent: "flex-start"}}
                        link={'https://t.me/eugenepash'}
                        title={'Telegram'}
                        myColor={'#2BA0DA'}
                        icon={telegram_icon}/>
                <Button styles={{width: 200, height: 60, justifyContent: "flex-start"}}
                        link={'https://www.linkedin.com/in/eugenepash/'}
                        title={'Linkedin'}
                        myColor={'#0175AD'}
                        icon={linkedIn_icon}/>
            </div>
            <span className={s.footerReserved}>© 2022 All rights reserved</span>
        </div>
    )
}