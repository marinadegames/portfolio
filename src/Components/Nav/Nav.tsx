import s from './Nav.module.css'
import {Button} from "../Buttons/Button";

export const Nav = () => {
    return (
        <div className={s.navContainer}>
            <span className={s.navItem}>Skills</span>
            <span className={s.navItem}>Contacts</span>
            <span className={s.navItem}>Projects</span>

            <Button color={"black"}
                    title={'Send me'}
                    styles={{margin: '0 0 0 30px'}}/>

        </div>
    )
}