import React, { useEffect, useState } from 'react'
import "./comments.scss"
import { Avatar, Button, Card, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addCommentToDB, getComments } from '../../services/comments';
import Swal from 'sweetalert2';
const Comments = () => {
  const { register, handleSubmit } = useForm();
  const { postId } = useParams()
  const { userLogged } = useSelector((state) => state.auth)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState(false)

  useEffect(() => {
    getData()
  }, [newComment])
  const addComment = async (data) => {
    const comment = {
      ...data,
      postId,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
      userName: userLogged.name
    }

    const resp = await addCommentToDB(comment)

    if (resp) {
      Swal.fire(
        "Excelente!",
        "Haz hecho un aporte a esta publicación con exito!",
        "success"
      );
      setNewComment(!newComment)
    } else {
      Swal.fire(
        "Oops!",
        "Algo salio mal, intenta de nuevo!",
        "error"
      );
    }
  }
  const getData = async () => {
    const data = await getComments(postId)
    setComments(data)
  }

  return (
    <article className='comments'>
      <section className='comments__container'>
        <div className='comments__cards-container'>
          {
            comments.length > 0 ? comments?.map((comment, index) => (
              <Card className='comments__card' key={index} sx={{ maxWidth: 345 }}>
              <CardHeader
                className='comments__header'
                title={comment.userName}
              />
              <CardContent>
                <Typography className='comments__text' variant="body2" color="text.secondary">
                {comment.comment}
                </Typography>
              </CardContent>
            </Card>
            )) : (
              <h1 className='comments__title-empty-state'>No hay comentarios disponibles aún para esta publicación</h1>
            )
          }

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
              placeholder='Maximo 290 caracteres'
              {...register("comment", { required: true, maxLength: 290 })}
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