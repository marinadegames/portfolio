import s from './Buttons.module.css'
import {ButtonColors} from "../../Utils/types";
import {CSSProperties, useEffect, useState} from "react";

type PropsType = {
    color?: ButtonColors
    styles?: CSSProperties
    title: string
    icon?: string

}

export const Button = ({color, styles, title, icon}: PropsType) => {

    const [colorBtn, setColorBtn] = useState<ButtonColors>('black')

    useEffect(() => {
        setColorBtn(color ? color : 'black')
    }, [])


    return (
        <button className={s.black}
                style={styles ? styles : {}}>
            {icon ? <img className={s.button_icon}
                         alt={'iconButton'}
                         src={icon}/> : null}
            {title}
        </button>
    )
}