import React from 'react'
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompanyInfo } from '../../services/company';
import { deletePostsDB, getPosts } from '../../services/posts';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import './cardMember.scss'

const CardMember = ({user}) => {

    const navigate = useNavigate()

    const navigateToContactForm = (memberId) => {
        navigate(`/home/contact/${memberId}`)
    }
    const navigateToProfile = (memberId) => {
        navigate(`/home/profile/${memberId}`)
    }


    return (
        <section className='member__info-container'>
            <Avatar
                alt="Remy Sharp"
                src={user.logo}
                sx={{ width: 100, height: 100 }}
                className='member__avatar'
            />
            <h1 className='member__name'>{user.name}</h1>
            <p className='member__country'>{user.country}</p>
            {/* <p className='member__description'>{user.description}</p> */}
            <div className='member__social-container'>
                {
                    user?.web && (
                        <a href={user.web} className='member__social-icon' target='_blank'><CiLink /></a>
                    )
                }
                {
                    user?.linkeln && (
                        <a href={user.linkeln} className='member__social-icon' target='_blank'><FaLinkedin /></a>
                    )
                }
                {
                    user?.instagram && (
                        <a href={user.instagram} className='member__social-icon' target='_blank'><FaInstagram /></a>
                    )
                }
            </div>
            <h2 className='member__subtitle'>¿Quieres colaborar con nosotros?</h2>
            <Button className='member__button' variant="contained" onClick={() => navigateToContactForm(user.id)}>¡Contactanos!</Button>
            <Button className='member__button' variant="contained" onClick={() => navigateToProfile(user.id)}>VER PERFIL DE EMPRESA</Button>

        </section>
    )
}

export default CardMember