import React, { useEffect, useState } from 'react'
import "./userProfile.scss"
import { Avatar, Button } from '@mui/material'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompanyInfo } from '../../services/company';

const UserProfile = () => {
  const navigate = useNavigate()
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
  const navigateToContactForm = () => {
    navigate(`/home/contact/${memberId}`)
  }
  return (
    <>
      {
        user?.name && (
          <article className='user-profile'>
            <section className='user-profile__info-container'>
              <Avatar
                alt="Remy Sharp"
                src={user.logo}
                sx={{ width: 100, height: 100 }}
                className='user-profile__avatar'
              />
              <h1 className='user-profile__name'>{user.name}</h1>
              <p className='user-profile__country'>{user.country}</p>
              <p className='user-profile__description'>{user.description}</p>
              <div className='user-profile__social-container'>
                {
                  user?.web && (
                    <a href={user.web} className='user-profile__social-icon' target='_blank'><CiLink /></a>
                  )
                }
                {
                  user?.linkeln && (
                    <a href={user.linkeln} className='user-profile__social-icon' target='_blank'><FaLinkedin /></a>
                  )
                }
                {
                  user?.instagram && (
                    <a href={user.instagram} className='user-profile__social-icon' target='_blank'><FaInstagram /></a>
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
    </>

  )
}

export default UserProfile