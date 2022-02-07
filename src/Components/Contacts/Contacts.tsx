// imports
import React from "react";
import s from './Contacts.module.css'
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniversalButtonSecond} from "../UniversalButtonSecond/UniversalButtonSecond";

// types


// component

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsBlockContainer}>
                <h2>Write me</h2>
                <form className={s.formContacts}>
                    <input type={'text'} placeholder={'Name'}/>
                    <input type={'text'} placeholder={'Email'}/>
                    <textarea placeholder={'Message'}/>
                </form>

                <UniversalButtonSecond title={'send!'}/>
            </div>
        </div>
    )
}