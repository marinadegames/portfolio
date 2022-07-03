import s from './Nav.module.css'
import {Button} from "../Buttons/Button";
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.navContainer}>
            <span className={s.navItem}>Skills</span>
            <span className={s.navItem}>Contacts</span>
            <span className={s.navItem}>Projects</span>

            <Link to={'form'}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  isDynamic={true}
                  duration={1000}>
                <Button color={"black"}
                        title={'Send me'}
                        styles={{margin: '0 0 0 30px'}}/>
            </Link>
        </div>
    )
}