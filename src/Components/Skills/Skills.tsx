// import
import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";

// component
export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsBlockContainer}>
                <h2>My skills:</h2>
                <div className={s.skills}>
                    <Skill title={'HTML&CSS'}
                           icon={''}
                           description={'Lorem ipsum dolor sit amet, labore et dolore magna aliqua. An quis nostrud.'}
                    />
                    <Skill title={'JavaScript'}
                           description={'Duis aute irure dolor in reprehenderit in nulla pariatur.'}
                    />
                    <Skill title={'React'}
                           description={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                </div>
                <div className={s.skills}>
                    <Skill title={'REST API'}
                           icon={''}
                           description={'Lorem ipsum dolor sit amet, labore et dolore magna aliqua. An quis nostrud.'}
                    />
                    <Skill title={'Material UI'}
                           description={'Duis aute irure dolor in reprehenderit in nulla pariatur.'}
                    />
                    <Skill title={'Figma'}
                           description={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                </div>
            </div>
        </div>
    )
}