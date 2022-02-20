// imports
import React, {useState} from "react"
import s from './WriteMe.module.css'
// const axios = require('axios').default;
import emailjs from '@emailjs/browser';

// component
export const WriteMe = () => {

    const [name_input, setName_input] = useState<string>('')
    const [email_input, setEmail_input] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [informText, setInformText] = useState<string>('')

    const change_name_input = (text: string) => {
        setName_input(text)
    }
    const change_email_input = (text: string) => {
        setEmail_input(text)
    }
    const change_textarea_input = (text: string) => {
        setMessage(text)
    }

    const sendEmail = (e: any) => {
        e.preventDefault();


        emailjs.send("service_mhpj00b", "template_073hvyr", {
            name: name_input,
            email: email_input,
            message: message,
        }, 'user_MsLqF4LHRok7tN8gVWPOK').then(res => {
            console.log(res.text)
            setInformText('SENT!')
            setName_input('')
            setEmail_input('')
            setMessage('')
            setTimeout( () => {
                setInformText('')
            }, 3000)
        }, (error) => {
            console.log(error)
        })
        e.target.reset()
    }

    return (
        <div className={s.write_me}>

            <form className={s.write_me_container} onSubmit={sendEmail}>
                <h1>Write me:</h1>
                <input className={s.input_custom}
                       value={name_input}
                       placeholder={'Name'}
                       onChange={e => change_name_input(e.currentTarget.value)}
                />
                <input className={s.input_custom}
                       value={email_input}
                       placeholder={'Email'}
                       onChange={e => change_email_input(e.currentTarget.value)}
                />
                <textarea className={s.textarea_custom}
                          value={message}
                          placeholder={'Message'}
                          onChange={e => change_textarea_input(e.currentTarget.value)}
                />
                <button className={s.btn} type={"submit"}>hire me</button>
                <span className={s.informText}>{informText}</span>
            </form>

        </div>
    )
}