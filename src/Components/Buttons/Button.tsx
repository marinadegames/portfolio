import s from './Buttons.module.css'
import {ButtonColors} from "../../Utils/types";
import {CSSProperties, useEffect, useState} from "react";

type PropsType = {
    color?: ButtonColors
    styles?: CSSProperties
    title: string
    icon?: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({color, styles, title, icon, onClick, disabled}: PropsType) => {

    const [colorBtn, setColorBtn] = useState<ButtonColors>('black')

    useEffect(() => {
        if (disabled){
            setColorBtn('disabled')
        }
        setColorBtn(color ? color : 'black')
    }, [])

    const colorSelector = () => {
        if (disabled) return s.disabled
        if (colorBtn === 'black') return s.black
        if (colorBtn === 'blue') return s.blue
        if (colorBtn === 'yellow') return s.yellow
        if (colorBtn === 'red') return s.red
        if (colorBtn === 'green') return s.green
    }

    return (
        <button className={colorSelector()}
                disabled={disabled}
                onClick={onClick}
                style={styles ? styles : {}}>
            {icon ? <img className={s.button_icon}
                         alt={'iconButton'}
                         src={icon}/> : null}
            {title}
        </button>
    )
}