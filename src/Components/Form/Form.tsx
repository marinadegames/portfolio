import s from './Form.module.css'
import {Input} from "../Input/Input";
import {useCallback, useEffect, useState} from "react";
import {TextArea} from "../TextArea/TextArea";
import {Button} from "../Buttons/Button";
import {Spinner} from "../Spinner/Spinner";

export const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

type RespMsgType = {
    msg: any
    error: boolean
}

export const Form = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [textarea, setTextarea] = useState<string>('')
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [respMsg, setRespMsg] = useState<RespMsgType>({
        msg: null,
        error: false
    })

    const changeEmailError = useCallback((value: boolean) => {
        setErrorEmail(value)
    }, [])
    const changeNameCallback = useCallback((name: string) => {
        setName(name)
    }, [])
    const changeTextareaCallback = useCallback((message: string) => {
        setTextarea(message)
    }, [])
    const changeEmailCallback = useCallback((value: string) => {
        setErrorEmail(false)
        setEmail(value)
    }, [])

    const sendMeMessage = () => {
        setRespMsg({msg: null, error: false})
        if (name && email && textarea) {
            if (!regexEmail.test(email)) {
                setErrorEmail(true)
                return;
            }
            setIsLoading(true)
            new Promise((res, rej) => {
                setTimeout(() => {
                    res('Message sent!')
                }, 2000)
            }).then(resp => {
                setRespMsg({msg: resp, error: false})
                console.log(resp)
                setBtnDisabled(true)
                setName('')
                setEmail('')
                setTextarea('')
            }).catch(err => {
                setRespMsg({msg: err, error: true})
                setIsLoading(false)
                console.error(err)
            }).finally(() => {
                setIsLoading(false)
                setTimeout(() => {
                    setRespMsg({msg: null, error: false})
                }, 4000)
            })
        } else {
            console.log('NO')
        }
    }

    useEffect(() => {
        if (name.length > 0 && email.length > 0 && textarea.length > 0) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [name, email, textarea])

    return (
        <div className={s.formContainer}>
            <form onSubmit={event => event.preventDefault()}
                  id={'form'}
                  className={s.form}>
                <div className={s.fromTitle}>Write me</div>
                <Input value={name} callback={changeNameCallback} placeholder={'Name'}/>
                <Input value={email}
                       error={errorEmail}
                       callback={changeEmailCallback}
                       errorCallback={changeEmailError}
                       placeholder={'Email'}/>
                <TextArea placeholder={'Your message'}
                          value={textarea}
                          callback={changeTextareaCallback}
                          styles={{width: window.screen.width > 1000 ? '80%' : '100%'}}/>
                {isLoading
                    ? <Spinner size={'100px'} color={'#1747E7'}/>
                    : <Button title={'Write me!'}
                              color={'blue'}
                              disabled={btnDisabled}
                              onClick={sendMeMessage}
                              styles={{
                                  height: window.screen.width > 1000 ? 50 : 150,
                                  width: window.screen.width > 1000 ? 200 : 500,
                                  fontSize: window.screen.width > 1000 ? 30 : 60,
                              }}/>}
                {respMsg.msg &&
                    <small className={respMsg.error ? s.respMessageError : s.respMessage}>{respMsg.msg}</small>}
            </form>
        </div>
    )
}