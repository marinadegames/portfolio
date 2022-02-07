// imports
import React from 'react';
import {Header} from "./Components/Header/Header";
import s from './App.module.css'
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {MyWorks} from "./Components/MyWorks/MyWorks";
import {Offer} from "./Components/Offer/Offer";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";


// component
function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Offer/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

// export
// export
export default App;
