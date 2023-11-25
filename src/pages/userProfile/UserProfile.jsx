import React, { useEffect, useState } from 'react'
import "./userProfile.scss"
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

const UserProfile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const { memberId } = useParams()
  const { userLogged } = useSelector(state => state.auth)
  const [posts, setPosts] = useState([])
  const [deletePost, setDeletePost] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    getData()
  }, [memberId, deletePost])

  const getData = async () => {
    const dataCompany = await getCompanyInfo(memberId)
    const dataPosts = await getPosts(memberId)
    setPosts(dataPosts)
    setUser(dataCompany)
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

  const detelePost = async (id) => {
    Swal.fire({
      title: '¿Estás seguro de eliminar este post?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#307B30',
      cancelButtonColor: '#01140E',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
  }).then(async (result) => {
      if (result.isConfirmed) {
          const resp = await deletePostsDB(id)
          if (resp) {
              setDeletePost(!deletePost)
              Swal.fire(
                  'Listo!',
                  'La historia ha sido eliminada.',
                  'success'
              )
          } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Hubo un error al eliminar la publicación, vuelve a intentarlo!',
              })
          }
      }
  })
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
                {
                  posts.length > 0 ? (
                    posts?.map((post, index) => (
                      <Card key={index} sx={{ width: 345 }} className='user-profile__post'>
                        {
                          memberId === userLogged.id && (
                            <div className='user-profile__post-icons-container'>
                              <div className='user-profile__icon-edit' onClick={() => navigateEditPost(post.id)}>
                                <BiEdit />
                              </div>
                              <div className='user-profile__icon-edit' onClick={() => detelePost(post.id)}>
                                <MdDelete />
                              </div>
                            </div>
                          )
                        }
                        <CardMedia
                          sx={{ height: 140 }}
                          image={post.imagePost}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" className='user-profile__post-title'>
                            {post.title}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button onClick={() => navigatePost(post.id)} size="small" className='user-profile__post-button'>Ver más</Button>
                        </CardActions>
                      </Card>
                    ))
                  ) :
                    (
                      <p className='user-profile__no-posts'>{user.name} No ha publicado nada aún.</p>
                    )
                }
              </div>
            </section>
          </article>
        )
      }
    </>

  )
}

export default UserProfile