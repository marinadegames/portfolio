// imports
import React from 'react'
import s from './Skill.module.css'


// types
type PropsType = {
    title: string
    description: string
    icon?: any
}

// component
export const Skill = (props: PropsType) => {
    return (

        <div className={s.skillBlock}>
            <div className={s.container}>
                <div className={s.icon}>

                </div>
                <h3 className={s.title}>{props.title}</h3>
            </div>

            <span>{props.description}</span>
        </div>
    )
}