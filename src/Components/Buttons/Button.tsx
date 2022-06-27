import s from './Buttons.module.css'
import {ButtonColors} from "../../Utils/types";
import {useEffect, useState} from "react";

type PropsType = {
    color?: ButtonColors
    styles?: CSSStyleSheet
    title: string
    icon?: ImageData

}

export const Button = ({color, styles, title, icon}: PropsType) => {

    const [colorBtn, setColorBtn] = useState<ButtonColors>('black')

    useEffect(() => {
        setColorBtn(color ? color : 'black')
    }, [])

    return (
        <button style={{
            border: `2px solid var(--${colorBtn})`
        }}
                className={s.customButton}>
            {title}
        </button>
    )
}