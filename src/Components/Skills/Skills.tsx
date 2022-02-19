// imports
import React from "react";
import s from './Skills.module.css'
import {Card} from "../Card/Card";

// imports icons
import html5_icon from '../../assets/icone-html-orange.png'
import css3_icon from '../../assets/CSS3.png'
import JS_icon from '../../assets/js.png'
import react_icon from '../../assets/640px-Reactpng.png'
import redux_icon from '../../assets/redux.png'
import ts_icon from '../../assets/typescript.png'
import MUI_icon from '../../assets/logo.png'
import bootstrap_icon from '../../assets/Bootstrap_logo.svg.png'
import git_icon from '../../assets/25231.png'
import figma_icon from '../../assets/Figma-1-logo.png'
import photoshop_icon from '../../assets/PS.png'
import search_icon from '../../assets/search.png'
import {DarkCard} from "../DarkCard/DarkCard";

// component

export const Skills = () => {
    return (
        <div className={s.skills}>

            <div className={s.skills_container}>
                <h1>My skills:</h1>
                <div className={s.cards_container}>
                    <Card title={'HTML5'}
                          icon={html5_icon}
                          text={'LoredolorAn quis nostrud.'}/>

                    <Card title={'CSS3'}
                          icon={css3_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'JavaScript'}
                          icon={JS_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'React'}
                          icon={react_icon}
                          text={'Lorem ipsum dolor sit amet, labore et dolore magna aliqua. An quis nostrud.'}
                    />

                    <Card title={'Redux'}
                          icon={redux_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'TypeScript'}
                          icon={ts_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'Material UI'}
                          icon={MUI_icon}
                          text={'Lorem ipsum dolor sit amet, labore et dolore magna aliqua. An quis nostrud.'}
                    />
                    <Card title={'Bootstrap'}
                          icon={bootstrap_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />

                    <Card title={'Git / GitHub'}
                          icon={git_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'Figma'}
                          icon={figma_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />
                    <Card title={'Photoshop'}
                          icon={photoshop_icon}
                          text={'Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.'}
                    />


                </div>
                <DarkCard title={'And more...'}
                           icon={search_icon}
                           text={'I am constantly in search of new technologies and learning interesting things!'}
            />
            </div>
        </div>
    )
}