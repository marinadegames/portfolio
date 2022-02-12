// imports
import React from "react";
import s from './Main.module.css'
import avatar from '../../assets/avatar_black.png'
// component

export const Main = () => {

    return (
        <div className={s.main} >
            <div className={s.main_container}>

                <div className={s.main_title_container}>
                    <div className={s.main_title}><b>I am</b></div>
                    <div className={s.main_title}><b>Eugene Pashkevich</b></div>
                    <div className={s.main_title_black_box}>
                        <div className={s.black_box}>
                            Frontend
                        </div>
                        <div>developer</div>
                    </div>
                    <button className={s.btn_main}>Show more</button>
                </div>


                <div>
                    <img alt={'avatar'} src={avatar} className={s.avatar} />
                </div>
            </div>
        </div>
    )
}