// imports
import React, {useEffect, useRef, useState} from "react";
import s from './Main.module.css'
import avatar from '../../assets/avatar-min.jpg'
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min';
import {motion} from 'framer-motion';


const list = {
    hidden: {
        opacity: 1,
        transition: {when: "afterChildren"}
    }
}

// component
export const Main = () => {

    const [vantaEffect, setVantaEffect] = useState<any>(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.3,
                scaleMobile: 1.00,
                backgroundColor: 0xcec5c0,
                color1: 0x1c2121,
                color2: 0x1c2121,
                colorMode: "lerp",
                birdSize: 1.30,
                wingSpan: 22.00,
                separation: 30.00,
                alignment: 79.00,
                cohesion: 76.00,
                quantity: 4.50,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])


    return (
        <motion.section
            animate="hidden"
            variants={list}
            id="my-background"
            className={s.aboutContainer}
            ref={myRef}
        >
            <div className={s.main} id={'main'}>


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
                        <a href={'#skills'} className={s.link_btn_main}>
                            <button className={s.btn_main}>Show more</button>
                        </a>
                    </div>

                    <div>
                        <img alt={'avatar'} src={avatar} className={s.avatar}/>
                    </div>
                </div>
            </div>
        </motion.section>

    )
}


// <div className={s.main_container}>
//
//     <div className={s.main_title_container}>
//         <div className={s.main_title}><b>I am</b></div>
//         <div className={s.main_title}><b>Eugene Pashkevich</b></div>
//         <div className={s.main_title_black_box}>
//             <div className={s.black_box}>
//                 <p className={s.text_typing}>
//                     Frontend
//                 </p>
//             </div>
//             <div className={s.developerText}>developer</div>
//         </div>
//         <a href={'#skills'}>
//             <button className={s.btn_main}>Show more</button>
//         </a>
//     </div>
//
//     <div>
//         <img alt={'avatar'} src={avatar} className={s.avatar}/>
//     </div>
// </div>