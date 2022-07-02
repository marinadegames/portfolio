import s from './Main.module.css'
import {Button} from "../Buttons/Button";
import ArrowDown from "../../Assets/Images/ArrowDown";
import avatar from '../../Assets/Images/avatar.jpg'


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
                    <Button title={'Show more'} color={'blue'}/>
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