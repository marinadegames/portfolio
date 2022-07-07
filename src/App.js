import React, {useEffect, useRef} from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Remote} from "./Components/Remote/Remote";
import {Form} from "./Components/Form/Form";
import {Footer} from "./Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";


export const App = () => {

    const scrollRef = React.createRef()

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true
        });
    });


    return (

        <div className="scroll" ref={scrollRef}>
            <div className={s.App} data-scroll-container>
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
