// imports
import React from 'react'
import s from './Card.module.css'


//types
type propsType = {
    title?: string
    icon?: any
    text?: string
}


// component
export const Card = (props: propsType) => {
    return (
        <div className={s.card}>
            <div className={s.card_container}>
                <img src={props.icon} alt={props.icon} className={s.icon}/>
                <div className={s.title_container}>
                    <h2>{props.title}</h2>
                </div>


            </div>
            <div className={s.text_container}>
                <div>{props.text}</div>
            </div>
        </div>
    )
}