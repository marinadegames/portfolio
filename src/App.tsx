import React, {useEffect, useRef} from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Remote} from "./Components/Remote/Remote";
import {Form} from "./Components/Form/Form";
import {Footer} from "./Components/Footer/Footer";
// @ts-ignore
import locomotiveScroll from "locomotive-scroll";


export const App = () => {

    const scrollRef = React.createRef<any>()

    useEffect(() => {
        const scroll = new locomotiveScroll({
            el: scrollRef.current,
            smooth: false
        });
    });


    return (

        <div className="scroll" ref={scrollRef}>
            <div className={s.App}>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Remote/>
                <Form/>
            </div>
            <Footer/>

        </div>

    );
}
