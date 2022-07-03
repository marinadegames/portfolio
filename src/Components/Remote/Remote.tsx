import s from './Remote.module.css'
import {Button} from "../Buttons/Button";
import Human1 from "../../Assets/Images/Human1";
import Human2 from "../../Assets/Images/Human2";
import {Link} from "react-scroll";

export const Remote = () => {
    return (
        <div className={s.remoteContainer}>
            <Human1 className={s.human1}/>
            <span className={s.title}>Considering remote work options</span>
            <Link to={'form'}
                  spy={true}
                  smooth={true}
                  offset={-30}
                  isDynamic={true}
                  duration={1000}>
                <Button title={'Send me'} color={"blue"}/></Link>
            <Human2 className={s.human2}/>
        </div>
    )
}