import React, { useEffect, useState } from 'react';
import "./contactForm.scss"
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { getCompanies, getCompanyInfo } from '../../services/company';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        phoneNumber: '',
        collaboration: '',
    });
    const navigate = useNavigate();

    const { memberId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        getData();
        
    }, []);

    const getData = async () => {
        const data = await getCompanyInfo(memberId);
        setUser(data);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const infoContact = {
            companyName: formData.companyName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            collaboration: formData.collaboration,
        };

        // Envío de datos usando axios
        try {
            const response = await axios.post(
                `https://formsubmit.co/ajax/${user.email}`,
                infoContact,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            Swal.fire({
                title: '¡Formulario enviado con éxito!',
                icon: 'success',
              });
              setFormData({
                companyName: '',
                email: '',
                phoneNumber: '',
                collaboration: '',
              });

              navigate(`/home/members`);

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error al enviar el formulario',
                icon: 'error',
                text: 'Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.',
              });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <>
            {user?.name && (
                <article className='contact-form'>
                    <section className='contact-form__card'>
                        <h1 className='contact-form__title'>{user.name}</h1>
                        <form className='contact-form__form' onSubmit={handleSubmit}>
                            <TextField
                                className='contact-form__input'
                                type='text'
                                label='Nombre de la empresa'
                                variant='standard'
                                name='companyName'
                                onChange={handleInputChange}
                            />
                            <TextField
                                className='contact-form__input'
                                label='Correo empresarial'
                                type='email'
                                variant='standard'
                                name='email'
                                onChange={handleInputChange}
                            />
                            <TextField
                                className='contact-form__input'
                                label='Número de contacto'
                                type='number'
                                variant='standard'
                                name='phoneNumber'
                                onChange={handleInputChange}
                            />
                            <TextField
                                label='Asunto'
                                placeholder='¿Cómo te gustaría colaborar con nosotros?'
                                multiline
                                variant='standard'
                                className='contact-form__input'
                                name='collaboration'
                                onChange={handleInputChange}
                            />
                            <Button variant='contained' className='contact-form__button' type='submit'>
                                Enviar
                            </Button>
                        </form>
                    </section>
                </article>
            )}
        </>
    );
};

export default ContactForm;
