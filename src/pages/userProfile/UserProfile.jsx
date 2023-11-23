import React from 'react'
import "./userProfile.scss"
import { Avatar, Button } from '@mui/material'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate()

  const navigateToContactForm = () => {
    navigate("/home/contact/1")
  }
  return (
    <article className='user-profile'>
      <section className='user-profile__info-container'>
        <Avatar
          alt="Remy Sharp"
          src="https://media.smurfitkappa.com/-/m/images/shared-assets/skg_logo.svg"
          sx={{ width: 100, height: 100 }}
          className='user-profile__avatar'
        />
        <h1 className='user-profile__name'>Smurfit Kappa de Argentina S.A. </h1>
        <p className='user-profile__country'>Argentina</p>
        <p className='user-profile__description'>Somos la compañía No. 1 en Europa en la producción de empaques corrugados, papel para
          corrugar y bag-in-box; además, somos el único productor Panamericano de papel para corrugar y empaques corrugados.
        </p>
        <div className='user-profile__social-container'>
          <a href="" className='user-profile__social-icon'><FaLinkedin /></a>
          <a href="" className='user-profile__social-icon'><FaFacebook /></a>
          <a href="" className='user-profile__social-icon'><FaInstagram /></a>
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