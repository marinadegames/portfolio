import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";

export const App = () => {
    return (
        <div className={s.App}>
            <Header/>
        </div>
    );
}
