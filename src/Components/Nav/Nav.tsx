import s from './Nav.module.css'
import {Button} from "../Buttons/Button";

export const Nav = () => {
    return (
        <div className={s.navContainer}>
            <Button color={"black"} title={'Send me'}/>
        </div>
    )
}