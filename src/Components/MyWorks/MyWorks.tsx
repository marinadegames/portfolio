// imports
import React from "react"
import s from './MyWorks.module.css'
import {CardWork} from "../CardWork/CardWork";

// imports icons
import moonMsg_icon from '../../assets/moon.png'
import moon_tasks_icon from '../../assets/moon-logo-purple.png'
import counter_icon from '../../assets/counter-logo.png'
import cards_icons from '../../assets/cards.png'

// component
export const MyWorks = () => {
    return (
        <div className={s.myWorks} id={'myWorks'}>
            <div className={s.myWorks_container}>
                <h2>MY WORKS</h2>
                <div className={s.cardsWorks_container}>
                    <CardWork title={'Moon msg!'}
                              icon={moonMsg_icon}
                              link={'https://marinadegames.github.io/moon-msg/'}
                              text={"It's my social network project - MOON msg! I use in the this project React, Redux, API requests, clean css, axios, thunks, and more.  "}
                    />
                    <CardWork title={'Moon tasks'}
                              icon={moon_tasks_icon}
                              link={'https://marinadegames.github.io/todolist-2.0/'}
                              text={'It\'s my ToDo-application - MOON tasks! I use in the this project React, Redux, clean CSS, and more. '}
                    />
                    <CardWork title={'Cards'}
                              icon={cards_icons}
                              link={'https://ershisan99.github.io/cards/'}
                              text={'It\'s team-work project. Our team used Tailwind UI, JavaScript, TypeScript, React, Redux, Redux-toolkit, ESLint, Prettier; Using Typescript for best code control during development,\n' +
                                  'refactoring, bug fixing, deploying.'}
                    />
                    <CardWork title={'Counter'}
                              icon={counter_icon}
                              link={'https://marinadegames.github.io/counter/'}
                              text={'This project - just simple counter with settings start value and end value. I used in this project React, Redux, clean CSS, React-router-dom and more'}
                    />



                </div>
            </div>
        </div>
    )
}