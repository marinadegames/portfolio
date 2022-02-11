// imports
import React from 'react';
import s from './App.module.css'
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";


// component
function App() {
    return (
        <div className={s.App}>
            <Header/>
            <Main/>
        </div>
    );
}


// export
export default App;
