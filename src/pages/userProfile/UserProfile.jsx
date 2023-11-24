import React from 'react'
import "./userProfile.scss"
import { Avatar, Button } from '@mui/material'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const navigate = useNavigate()
  const { userLogged } = useSelector(state => state.auth)

  const navigateToContactForm = () => {
    navigate("/home/contact/1")
  }
  return (
    <article className='user-profile'>
      <section className='user-profile__info-container'>
        <Avatar
          alt="Remy Sharp"
          src={userLogged.logo}
          sx={{ width: 100, height: 100 }}
          className='user-profile__avatar'
        />
        <h1 className='user-profile__name'>{userLogged.name}</h1>
        <p className='user-profile__country'>{userLogged.country}</p>
        <p className='user-profile__description'>{userLogged.description}</p>
        <div className='user-profile__social-container'>
          {
            userLogged?.web && (
              <a href={userLogged.web} className='user-profile__social-icon' target='_blank'><CiLink /></a>
            )
          }
          {
            userLogged?.linkeln&& (
              <a href={userLogged.linkeln} className='user-profile__social-icon' target='_blank'><FaLinkedin /></a>
            )
          }
          {
            userLogged?.instagram && (
              <a href={userLogged.instagram} className='user-profile__social-icon' target='_blank'><FaInstagram /></a>
            )
          }
        </div>
        <h2 className='user-profile__subtitle'>¿Quieres colaborar con nosotros?</h2>
        <Button className='user-profile__button' variant="contained" onClick={navigateToContactForm}>¡Contactanos!</Button>
      </section>
      <section>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </section>
    </article>
  )
}

export default UserProfile