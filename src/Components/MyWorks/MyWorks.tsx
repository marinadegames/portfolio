// imports
import React from "react";
import s from './MyWorks.module.css'
import {Work} from "../Work/Work";
import imgCounter from '../../assets/COUNTER.png'
import imgMoon from '../../assets/MOON_MSG_PREV.png'
import imgToDo from '../../assets/ToDo_PREV.png'

// types

// assets




// component

export const MyWorks = () => {

    const counterBack = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${imgCounter})`
    }
    const toDoBack = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${imgToDo})`
    }
    const moonBack = {
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(${imgMoon})`
    }

    return (
        <div className={s.MyWorksBlock}>

            <div className={s.myWorksContainer}>
                <h2>My works:</h2>
                <div className={s.works}>
                    <Work title={'Moon msg'}
                          styleBackground={counterBack}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquip ex ea commodo consequat.'}/>
                    <Work title={'Moon tasks'}
                          styleBackground={toDoBack}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquip ex ea commodo consequat.'}/>
                    <Work title={'Counter'}
                          styleBackground={moonBack}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquip ex ea commodo consequat.'}/>
                </div>
            </div>

        </div>
    )
}