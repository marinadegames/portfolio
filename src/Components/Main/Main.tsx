// imports
import React from "react";
import s from './Main.module.css'
import avatar from '../../assets/avatar-min.jpg'


// component
export const Main = () => {
    console.log('===== MAIN =====')
    return (
        <div className={s.main} id={'home'}>
            <div className={s.main_container}>

                <div className={s.main_title_container}>
                    <div className={s.main_title}><b>I am</b></div>
                    <div className={s.main_title}><b>Eugene Pashkevich</b></div>
                    <div className={s.main_title_black_box}>
                        <div className={s.black_box}>
                            <p className={s.text_typing}>
                                Frontend
                            </p>
                        </div>
                        <div className={s.developerText}>developer</div>
                    </div>
                    <a href={'#skills'}>
                        <button className={s.btn_main}>Show more</button>
                    </a>
                </div>

                <div>
                    <img alt={'avatar'} src={avatar} className={s.avatar}/>
                </div>
            </div>
        </div>
    )
}