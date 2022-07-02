import s from './Input.module.css'
import {CSSProperties} from "react";

type PropsType = {
    placeholder: string
    styles?: CSSProperties
    callback: (value: string) => void
    error?: boolean
    value: string
    errorCallback?: (value: boolean) => void
}

export const Input = ({placeholder, value, errorCallback, styles, callback, error}: PropsType) => {


    const callbackHandler = (value: string) => {
        callback(value)
    }


    return (
        <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
            <input placeholder={placeholder}
                   style={styles ? styles : {}}
                   value={value}
                   onBlur={() => {
                   }}
                   onChange={e => callbackHandler(e.currentTarget.value)}
                   className={error ? s.inputError : s.input}/>
            {error && <small className={s.errorMessage}>Wrong email!</small>}
        </div>
    )
}