import React, { useEffect, useState } from 'react'
import "./userProfile.scss"
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { BiEdit } from "react-icons/bi";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompanyInfo } from '../../services/company';

const UserProfile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const { memberId } = useParams()
  const { userLogged } = useSelector(state => state.auth)
  console.log(userLogged)

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

  const navigateEditPost = (id) => {
    navigate(`/home/edit-post/${id}`)
  }

  const navigatePost = (id) => {
    navigate(`/home/post/${id}`)
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
            <section className='user-profile__posts'>
              <h1 className='user-profile__posts-title'>Publicaciones de {user.name}</h1>
              <div className='user-profile__posts-container'>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width: 345 }} className='user-profile__post'>
                  {
                    memberId === userLogged.id && (
                      <div className='user-profile__icon-edit' onClick={() => navigateEditPost(1)}>
                        <BiEdit />
                      </div>
                    )
                  }
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://remarkableplaces.travel/wp-content/uploads/2021/01/shutterstock_759567577-2048x1150.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                      Lizard
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigatePost(1)} size="small" className='user-profile__post-button'>Ver más</Button>
                  </CardActions>
                </Card>
              </div>
            </section>
          </article>
        )
      }
    </>

  )
}

export default UserProfile