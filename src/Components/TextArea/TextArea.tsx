import s from './TextArea.module.css'
import {CSSProperties, useState} from "react";

type PropsType = {
    placeholder: string
    styles?: CSSProperties
    callback: (value: string) => void
}

export const TextArea = ({placeholder, styles, callback}: PropsType) => {

    const [value, setValue] = useState<string>('')

    const changeValue = (e: string) => {
        setValue(e)
    }

    const sendValue = () => {
        callback(value)
    }

    return (
        <textarea placeholder={placeholder}
                  style={styles ? styles : {}}
                  value={value}
                  onBlur={sendValue}
                  onChange={e => changeValue(e.currentTarget.value)}
                  className={s.textArea}
                  maxLength={300}/>
    )
}