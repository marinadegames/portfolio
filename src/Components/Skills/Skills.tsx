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
import Storybook from "../../assets/storybook.png";
import Postman_Icon from '../../assets/postman.png'
import {DarkCard} from "../DarkCard/DarkCard";
import formik_icon from '../../assets/formik.png'
import tailwindUI from '../../assets/Tailwind_CSSpng.png'

// component

export const Skills = () => {
    console.log('===== SKILLS =====')
    return (
        <div className={s.skills} id={'skills'}>

            <div className={s.skills_container}>
                <h1>My skills:</h1>
                <div className={s.cards_container}>

                    <Card title={'React'}
                          icon={react_icon}
                    />
                    <Card title={'Redux'}
                          icon={redux_icon}
                    />
                    <Card title={'JavaScript'}
                          icon={JS_icon}
                    />
                    <Card title={'TypeScript'}
                          icon={ts_icon}
                    />
                    <Card title={'HTML5'}
                          icon={html5_icon}
                    />
                    <Card title={'CSS3'}
                          icon={css3_icon}
                    />
                    <Card title={'Material UI'}
                          icon={MUI_icon}
                    />
                    <Card title={'Bootstrap'}
                          icon={bootstrap_icon}
                    />
                    <Card title={'Git / GitHub'}
                          icon={git_icon}
                    />
                    <Card title={'Figma'}
                          icon={figma_icon}
                    />
                    <Card title={'Photoshop'}
                          icon={photoshop_icon}
                    />
                    <Card title={'Storybook'}
                          icon={Storybook}
                    />
                    <Card title={'Postman'}
                          icon={Postman_Icon}
                    />
                    <Card title={'Formik'}
                          icon={formik_icon}
                    />
                    <Card title={'Tailwind UI'}
                          icon={tailwindUI}
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