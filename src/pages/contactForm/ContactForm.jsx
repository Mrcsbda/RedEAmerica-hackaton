import React from 'react'
import "./contactForm.scss"
import { Button, TextField } from '@mui/material'
const ContactForm = () => {
    return (
        <article className='contact-form'>
            <section className='contact-form__card'>
                <h1 className='contact-form__title'>Smurfit Kappa de Argentina S.A.</h1>
                <form action="" className='contact-form__form'>
                    <TextField
                        className='contact-form__input'
                        type='text'
                        label="Nombre de la empresa"
                        variant="standard" />
                    <TextField
                        className='contact-form__input'
                        label="Correo empresarial"
                        type='email'
                        variant="standard" />
                    <TextField
                        className='contact-form__input'
                        label="Número de contacto"
                        type='number'
                        variant="standard" />
                    <TextField
                        label="Asunto"
                        placeholder="¿Cómo te gustaria colaborar con nosotros?"
                        multiline
                        variant="standard"
                    />
                    <Button variant="contained" className='contact-form__button'>Enviar</Button>
                </form>
            </section>
        </article>
    )
}

export default ContactForm