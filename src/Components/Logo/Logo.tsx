import logo_icon from '../../Assets/Images/LOGOSITE.png'
import s from './Logo.module.css'


export const Logo = () => {
    return (
        <div className={s.logoContainer} data-scroll-section>
            <img className={s.logo} alt={'logo'} src={logo_icon} data-scroll/>
            <span className={s.logoTitle} data-scroll>Marinade</span>
        </div>
    )
}