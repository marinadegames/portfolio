import s from './Header.module.css';
import {Logo} from "../Logo/Logo";
import {Nav} from "../Nav/Nav";

export const Header = () => {
    return (
        <div className={s.header} data-scroll-section>
            <Logo/>
            <Nav/>
        </div>
    )
}

