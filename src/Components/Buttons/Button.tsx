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

    const colorSelector = () => {
        if (colorBtn === 'black') return s.black
        if (colorBtn === 'blue') return s.blue
        if (colorBtn === 'yellow') return s.yellow
        if (colorBtn === 'red') return s.red
        if (colorBtn === 'green') return s.green
    }

    return (
        <button className={colorSelector()}
                style={styles ? styles : {}}>
            {icon ? <img className={s.button_icon}
                         alt={'iconButton'}
                         src={icon}/> : null}
            {title}
        </button>
    )
}