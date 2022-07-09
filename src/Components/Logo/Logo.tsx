import logo_icon from '../../Assets/Images/LOGOSITE.png'
import s from './Logo.module.css'

export const Logo = () => {
    return (
        <div className={s.logoContainer} data-scroll-section>
            <img data-scroll data-scroll-speed="10" data-scroll-position="top" data-scroll-direction="horizontal" className={s.logo} alt={'logo'} src={logo_icon}/>
            <span data-scroll data-scroll-speed="10" data-scroll-position="top" data-scroll-direction="horizontal" id={'target'} className={s.logoTitle}>Marinade</span>
        </div>
    )
}