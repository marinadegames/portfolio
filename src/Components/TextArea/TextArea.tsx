import s from './TextArea.module.css'
import {CSSProperties} from "react";

type PropsType = {
    placeholder: string
    styles?: CSSProperties
    value: string
    callback: (value: string) => void
}

export const TextArea = ({placeholder, styles, callback, value}: PropsType) => {

    const changeValue = (value: string) => {
        callback(value)
    }


    return (
        <textarea placeholder={placeholder}
                  style={styles ? styles : {}}
                  value={value}
                  onChange={e => changeValue(e.currentTarget.value)}
                  className={s.textArea}
                  maxLength={300}/>
    )
}