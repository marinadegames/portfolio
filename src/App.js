import React, {useEffect} from 'react';
import s from './App.module.css'
import LocomotiveScroll from "locomotive-scroll";
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Remote} from "./Components/Remote/Remote";
import {Form} from "./Components/Form/Form";

export const App = () => {
    const scrollRef = React.createRef();


    useEffect(() => {
        new LocomotiveScroll({
            smooth: true,
            lerp: 0.001,
            repeat: true,
            firefoxMultiplier: 100,
            multiplier: 100,
            touchMultiplier: 100,
        });
    });

    return (
        <>
            <div className={s.App} >
                <div  ref={scrollRef} data-scroll-container={true} data-scroll-speed={20} >
                    <Header/>
                    <Main/>
                    <Skills/>
                    <Projects/>
                    <Remote/>
                    <Form/>
                </div>
            </div>
            {/*<div data-scroll-container>*/}
            {/*    <Footer />*/}
            {/*</div>*/}

        </>
    );
}
