// imports
import React from "react";
import s from './Contacts.module.css'

// types


// component

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsBlockContainer}>
                <h2>Contacts:</h2>
                <form>
                    <input/>
                    <input/>
                    <input/>
                </form>
            </div>
        </div>
    )
}