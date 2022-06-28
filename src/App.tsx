import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";

export const App = () => {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}
