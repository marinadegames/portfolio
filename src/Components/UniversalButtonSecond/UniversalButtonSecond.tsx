// imports
import React from "react";
import s from './UniversalButtonSecond.module.css'

// types
type PropsType = {
    title: string
    logo?: any
}

// component
export const UniversalButtonSecond = (props: PropsType) => {
    return (
        <button className={s.UniversalButtonSecond}>{props.title}</button>
    )
}