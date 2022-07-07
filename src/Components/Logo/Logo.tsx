import logo_icon from '../../Assets/Images/LOGOSITE.png'
import s from './Logo.module.css'


export const Logo = () => {
    return (
        <div  data-scroll-section className={s.logoContainer}>
            <img data-scroll data-scroll-position="bottom" className={s.logo} alt={'logo'} src={logo_icon} />
            <span data-scroll data-scroll-position="bottom"  className={s.logoTitle}>Marinade</span>
        </div>
    )
}