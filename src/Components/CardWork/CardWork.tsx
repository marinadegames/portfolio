// imports
import React from 'react'
import s from './CardWork.module.css'


//types
type propsType = {
    title?: string
    icon?: any
    text?: string
    link?: string
}


// component
export const CardWork = (props: propsType) => {


    return (
        <div className={s.cardWork}>
            <div className={s.cardWork_container}>
                <img src={props.icon} alt={props.icon} className={s.icon}/>
                <div className={s.title_container}>
                    <div>{props.title}</div>
                </div>
            </div>
            <div className={s.text_container}>
                <div>{props.text}</div>
            </div>

            <a href={props.link}>
                <button className={s.btn_workCard}>
                    show
                </button>
            </a>

        </div>
    )
}