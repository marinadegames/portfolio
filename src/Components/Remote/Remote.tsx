import s from './Remote.module.css'
import {Button} from "../Buttons/Button";
import Human1 from "../../Assets/Images/Human1";
import Human2 from "../../Assets/Images/Human2";

export const Remote = () => {
    return (
        <div className={s.remoteContainer}>
            <Human1 className={s.human1}/>
            <span className={s.title}>Considering remote work options</span>
            <Button title={'Send me'} color={"blue"}/>
            <Human2 className={s.human2}/>
        </div>
    )
}