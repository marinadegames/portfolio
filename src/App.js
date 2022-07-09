import React, {useEffect} from 'react';
import s from './App.module.css'
import LocomotiveScroll from "locomotive-scroll";
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";

export const App = () => {
    const scrollRef = React.createRef();


    useEffect(() => {
        new LocomotiveScroll({
            scrollFromAnywhere: true,
            smooth: true,
            lerp: 0.01,
            firefoxMultiplier: 10,
            multiplier: 0.05,
            touchMultiplier: 1,

        });
    });

    return (
        <>
            <div className={s.App} >
                <div ref={scrollRef} data-scroll-container data-scroll-speed={10} >
                    <Header />
                    <Main/>
                    <Skills/>
                    {/*<Projects/>*/}
                    {/*<Remote/>*/}
                    {/*<Form/>*/}
                </div>
            </div>
            {/*<div data-scroll-container>*/}
            {/*    <Footer />*/}
            {/*</div>*/}

        </>
    );
}
