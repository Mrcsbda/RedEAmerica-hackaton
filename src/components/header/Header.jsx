import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
const Header = () => {
  const { userLogged } = useSelector(state => state.auth)
  return (
    <header className='header'>
      <figure className='header__logo-container'>
        <img className='header__logo' src="https://www.redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="logo icon" />
      </figure>
      <Link className='header__link' to="/home" >Inicio</Link>
      <Link to={`/home/profile/${userLogged.id}`}>
        <Avatar
          alt="Remy Sharp"
          className='header__avatar'
          src={userLogged.logo}
          sx={{ width: 35, height: 35 }}
        />
      </Link>
    </header>
  )
}

export default Header