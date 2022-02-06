// imports
import React from "react";
import s from './UniversalButton.module.css'

// types
type PropsType = {
    title: string
    logo?: any

}

// component
export const UniversalButton = (props: PropsType) => {
    return (
        <button className={s.UniversalButton}>{props.title}</button>
    )
}