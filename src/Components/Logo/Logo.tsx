import logo_icon from '../../Assets/Images/LOGOSITE.png'
import s from './Logo.module.css'

export const Logo = () => {
    return (
        <div className={s.logoContainer}>
            <img className={s.logo} alt={'logo'} src={logo_icon}/>
            <span className={s.logoTitle}>Marinade</span>
        </div>
    )
}