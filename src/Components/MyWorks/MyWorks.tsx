// imports
import React from "react"
import s from './MyWorks.module.css'
import {CardWork} from "../CardWork/CardWork";

// imports icons
import moonMsg_icon from '../../assets/moon.png'
import moon_tasks_icon from '../../assets/moon-logo-purple.png'
import counter_icon from '../../assets/counter-logo.png'

// component
export const MyWorks = () => {
    return (
        <div className={s.myWorks} id={'myWorks'}>
            <div className={s.myWorks_container}>
                <h2>MY WORKS</h2>
                <div className={s.cardsWorks_container}>
                    <CardWork title={'Moon msg!'}
                              icon={moonMsg_icon}
                              text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <CardWork title={'Moon tasks'}
                              icon={moon_tasks_icon}
                              text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <CardWork title={'Counter'}
                              icon={counter_icon}
                              text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />

                </div>
            </div>
        </div>
    )
}