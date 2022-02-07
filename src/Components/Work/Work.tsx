// imports
import React from "react";
import s from './Work.module.css'
import {UniversalButton} from "../UniversalButton/UniversalButton";


// types
type PropsType = {
    title: string
    description: string
    styleBackground?: any
}


// component
export const Work = (props: PropsType) => {
    return (
        <div className={s.work} style={props.styleBackground}>
            <div className={s.container}>
                <h3 className={s.title}>{props.title}</h3>
                <span>{props.description}</span>
                <UniversalButton title={'show'}/>
            </div>

        </div>
    )
}