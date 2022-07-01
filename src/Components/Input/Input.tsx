import s from './Input.module.css'
import {CSSProperties, useState} from "react";

type PropsType = {
    placeholder: string
    styles?: CSSProperties
    callback: (value: string) => void
    error?: boolean
    errorCallback?: (value: boolean) => void
}

export const Input = ({placeholder, errorCallback, styles, callback, error}: PropsType) => {

    const [value, setValue] = useState<string>('')

    const changeValue = (e: string) => {
        errorCallback && errorCallback(false)
        setValue(e)
    }

    const sendValue = () => {
        callback(value)
    }

    return (
        <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
        <input placeholder={placeholder}
               style={styles ? styles : {}}
               value={value}
               onBlur={sendValue}
               onChange={e => changeValue(e.currentTarget.value)}
               className={error ? s.inputError : s.input}/>
            {error && <small className={s.errorMessage}>Wrong email!</small>}
        </div>
    )
}