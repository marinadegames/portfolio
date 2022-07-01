import s from './Form.module.css'
import {Input} from "../Input/Input";
import {useCallback, useState} from "react";
import {TextArea} from "../TextArea/TextArea";

export const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

export const Form = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [textarea, setTextarea] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<boolean>(false)

    const changeEmailError = (value: boolean) => {
        setErrorEmail(value)
    }

    const changeNameCallback = useCallback((name: string) => {
        setName(name)
    }, [])
    const changeTextareaCallback = useCallback((message: string) => {
        setTextarea(message)
    }, [])

    const changeEmailCallback = useCallback((email: string) => {
        if (regexEmail.test(email)) {
            setEmail(email)
        } else {
            setErrorEmail(true)
        }
    }, [])


    return (
        <div className={s.formContainer}>

            <form onSubmit={event => event.preventDefault()}
                  className={s.form}>
                <div className={s.fromTitle}>Write me</div>
                <Input callback={changeNameCallback} placeholder={'Name'}/>
                <Input error={errorEmail}
                       callback={changeEmailCallback}
                       errorCallback={changeEmailError}
                       placeholder={'Email'}/>
                <TextArea placeholder={'Your message'} callback={changeTextareaCallback}/>
            </form>
        </div>
    )
}