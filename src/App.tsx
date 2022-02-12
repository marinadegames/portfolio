// imports
import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/MyWorks/MyWorks";
import {Offer} from "./Components/Offer/Offer";
import {WriteMe} from "./Components/WriteMe/WriteMe";


// component
function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Offer/>
            <WriteMe/>
        </div>
    );
}


// export
export default App;
