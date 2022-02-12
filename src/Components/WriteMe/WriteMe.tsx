// imports
import React from "react"
import s from './WriteMe.module.css'


// component
export const WriteMe = () => {
    return (
        <div className={s.write_me}>
            <div className={s.write_me_container}>
                <h1>Write me:</h1>
                <input className={s.input_custom} placeholder={'Name'}/>
                <input className={s.input_custom} placeholder={'Email'}/>
                <textarea className={s.textarea_custom} placeholder={'Message'}/>
                <button className={s.btn}>hire me</button>
            </div>
        </div>
    )
}