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
    myColor?: string
}

export const Button = ({color, styles, title, icon, onClick, disabled, myColor}: PropsType) => {

    const [colorBtn, setColorBtn] = useState<ButtonColors>('black')
    const [hover, setHover] = useState<boolean>(false)

    useEffect(() => {
        if (disabled) {
            setColorBtn('disabled')
        }
        setColorBtn(color ? color : 'black')
    }, [])

    const colorSelector = () => {
        if (disabled) return 'gray'
        if (myColor) return myColor
        if (colorBtn === 'black') return 'var(--black)'
        if (colorBtn === 'blue') return 'var(--blue)'
        if (colorBtn === 'yellow') return 'var(--yellow)'
        if (colorBtn === 'red') return 'var(--red)'
        if (colorBtn === 'green') return 'var(--green)'
    }

    const customStyles: CSSProperties = {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        color: colorSelector(),
        backgroundColor: 'white',
        height: 50,
        minWidth: 165,
        borderRadius: 'var(--round)',
        fontSize: 20,
        fontWeight: "bold",
        border: ` 2px solid ${colorSelector()}`,
        filter: `drop-shadow(3px 4px 0px ${colorSelector()})`,
        transition: '0.15s',
        cursor: "pointer",
    }
    const hoverStyles: CSSProperties = {
        transform: 'scaleX(1.05) translateX(-5px) translateY(-5px)',
        translate: 5,
        filter: `drop-shadow(6px 7px 0px ${colorSelector()})`,
    }

    return (
            <button disabled={disabled}

                    onClick={onClick}
                    style={hover
                        ? {...customStyles, ...hoverStyles, ...styles}
                        : {...customStyles, ...styles}}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                {icon ? <img className={s.button_icon}
                             alt={'iconButton'}
                             src={icon}/> : null}
                {title}
            </button>
    )
}

