import s from './Main.module.css'
import {Button} from "../Buttons/Button";
import ArrowDown from "../../Assets/Images/ArrowDown";
import avatar from '../../Assets/Images/avatar.jpg'
import {Link} from "react-scroll";


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.mainContainer}>
                <div className={s.boxLeft}>
                    <span className={s.title}>I'm Eugene Pashkevich</span>
                    <div className={s.frontendBox}>
                        <div className={s.frontendTitle}>Frontend</div>
                        <span className={s.developerText}>-developer</span>
                    </div>
                    <Link to={'skills'}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}>
                        <Button title={'Show more'} color={'blue'}/>
                    </Link>
                </div>
                <div className={s.boxRight}>
                    <img className={s.avatar} alt={avatar} src={avatar}/>
                </div>
            </div>
            <div className={s.scroll}>
                Scroll
                <ArrowDown className={s.arrowDown} height={50} fontWeight={200}/>
            </div>
        </div>
    )
}