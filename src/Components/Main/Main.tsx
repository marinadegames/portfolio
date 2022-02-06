// imports
import React from "react";
import s from './Main.module.css'

// component

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.mainBlockContainer}>
                <div className={s.text}>
                    <h1>I am <br/> Eugene Pashkevich</h1>
                    <span>I am front-end developer</span>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}