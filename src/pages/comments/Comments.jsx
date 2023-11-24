import React from 'react'
import "./comments.scss"
import { Avatar, Button, Card, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addCommentToDB } from '../../services/comments';
import Swal from 'sweetalert2';
const Comments = () => {
  const { register, handleSubmit } = useForm();
  const { postId } = useParams()
  const { userLogged } = useSelector((state) => state.auth)
  const addComment = async (data) => {
    const comment = {
      ...data,
      postId,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      userName: userLogged.name
    }

    const resp = await addCommentToDB(comment)

    if(resp) {
      Swal.fire(
        "Excelente!",
        "Haz hecho un aporte a esta publicación con exito!",
        "success"
       );
    } else {
      Swal.fire(
        "Oops!",
        "Algo salio mal, intenta de nuevo!",
        "error"
       );
    }
  }

  return (
    <article className='comments'>
      <section className='comments__container'>
        <div className='comments__cards-container'>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              className='comments__header'
              title="Shrimp and Chorizo Paella"
            />
            <CardContent>
              <Typography className='comments__text' variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='comments__input-container'>
          <h1 className='comments__title'>Agregar comentario</h1>
          <p>¿Quieres aportar sobre esta tematica? ¡Aqui podras dejar tu comentario y aportar sobre esta tematica!</p>
          <form onSubmit={handleSubmit(addComment)} className='comments__form'>
            <TextField
              id="outlined-textarea"
              label="Agrega tu comentario"
              className='comments__input'
              multiline
              {...register("comment", { required: true })}
              type='text'
            />
            <Button type='submit' className='comments__button' variant="contained">Publicar</Button>
          </form>
        </div>
      </section>
    </article>
  )
}

export default Comments