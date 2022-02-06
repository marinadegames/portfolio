// imports
import React from "react";
import s from './Offer.module.css'
import {UniversalButton} from "../UniversalButton/UniversalButton";

// types


// component

export const Offer = () => {
    return (
        <div className={s.offerBlock}>
            <div className={s.offerBlockContainer}>
                <h2>Considering remote work options</h2>
                <UniversalButton title={'hire me'}/>
            </div>
        </div>
    )
}