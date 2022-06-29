import s from './Remote.module.css'
import {Button} from "../Buttons/Button";
import Human1 from "../../Assets/Images/Human1";
import Human2 from "../../Assets/Images/Human2";

export const Remote = () => {
    return (
        <div className={s.remoteContainer}>
            <Human1 style={{position: "absolute", left: 100}} height={333}/>
            <span className={s.title}>Considering remote work options</span>
            <Button title={'Send me'} color={"blue"}/>
            <Human2 style={{position: "absolute", right: 140}} height={333}/>
        </div>
    )
}