import s from './Nav.module.css'
import {Button} from "../Buttons/Button";
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.navContainer}>
            <Link to={'skills'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span className={s.navItem}>Skills</span>
            </Link>
            <Link to={'footer'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span className={s.navItem}>Contacts</span>
            </Link>
            <Link to={'projects'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span className={s.navItem}>Projects</span>
            </Link>
            <Link to={'form'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <Button color={"black"} title={'Send me'} styles={{
                    margin: '0 0 0 30px',
                    height: window.screen.width < 1300 ? 90 : 50,
                    width: window.screen.width < 1300 ? 320 : 165,
                    fontSize: window.screen.width < 1300 ? 50 : 20,
                }}/>
            </Link>
        </div>
    )
}