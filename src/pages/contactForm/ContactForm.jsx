import React, { useEffect, useState } from 'react'
import "./contactForm.scss"
import { Button, TextField } from '@mui/material'
import { getCompanyInfo } from '../../services/company'
import { useParams } from 'react-router'
import { useForm } from 'react-hook-form'
const ContactForm = () => {
    const [user, setUser] = useState({})
    const { memberId } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        getData()
    }, [])

    const getData = async () => {
        const data = await getCompanyInfo(memberId)
        setUser(data)
    }

    return (
        <>
            {
                user?.name && (
                    <article className='contact-form'>
                        <section className='contact-form__card'>
                            <h1 className='contact-form__title'>{user.name}</h1>
                            <form className='contact-form__form'>
                                <TextField
                                    className='contact-form__input'
                                    type='text'
                                    label="Nombre de la empresa"
                                    variant="standard"
                                    name='Nombre de la empresa' />
                                <TextField
                                    className='contact-form__input'
                                    label="Correo empresarial"
                                    type='email'
                                    variant="standard"
                                    name='Correo empresarial' />
                                <TextField
                                    className='contact-form__input'
                                    label="Número de contacto"
                                    type='number'
                                    variant="standard"
                                    name='Número de contacto' />
                                <TextField
                                    label="Asunto"
                                    placeholder="¿Cómo te gustaria colaborar con nosotros?"
                                    multiline
                                    variant="standard"
                                    className='contact-form__input'
                                    name='¿Cómo te gustaria colaborar con nosotros?'
                                />
                                <Button variant="contained" className='contact-form__button' type="submit">Enviar</Button>
                            </form>
                        </section>
                    </article>
                )
            }
        </>
    )
}

export default ContactForm