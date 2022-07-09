import s from './Nav.module.css'
import {Button} from "../Buttons/Button";
import {Link} from "react-scroll";

export const Nav = () => {
    return (
        <div className={s.navContainer} >
            <Link to={'skills'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span data-scroll data-scroll-speed="10" data-scroll-position="top" data-scroll-direction="horizontal" className={s.navItem} >Skills</span>
            </Link>
            <Link to={'footer'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span data-scroll data-scroll-speed="10" data-scroll-position="top" data-scroll-direction="horizontal" className={s.navItem} >Contacts</span>
            </Link>
            <Link to={'projects'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <span data-scroll data-scroll-speed="10" data-scroll-position="top" data-scroll-direction="horizontal" className={s.navItem} >Projects</span>
            </Link>
            <Link data-scroll to={'form'} spy={true} smooth={true} offset={-30} isDynamic={true} duration={1000}>
                <Button data-scroll  color={"black"} title={'Send me'} styles={{
                    margin: '0 0 0 30px',
                    height: window.screen.width < 1300 ? 90 : 50,
                    width: window.screen.width < 1300 ? 320 : 165,
                    fontSize: window.screen.width < 1300 ? 50 : 20,
                }}/>
            </Link>
        </div>
    )
}