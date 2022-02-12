// imports
import React from "react"
import s from './Offer.module.css'
import workIcon from '../../assets/work.png'
import icon_work_2 from '../../assets/work2.png'
import icon_work_3 from '../../assets/work3.png'


// component
export const Offer = () => {
    return (
        <div className={s.offer}>
            <div className={s.offer_container}>
                <div className={s.box}>
                    <img src={workIcon} alt={'iconWork'} className={s.icon_work}/>
                    <h1>Considering remote work options</h1>
                    <div className={s.icons_work_container}>
                        <img src={icon_work_2} alt={'iconWork2'} className={s.icon1}/>
                        <img src={icon_work_3} alt={'iconWork3'} className={''}/>
                    </div>
                </div>

                <div className={s.box}>
                    <button className={s.btn_offer}>send me</button>
                </div>

            </div>
        </div>
    )
}