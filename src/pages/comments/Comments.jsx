import React from 'react'
import "./comments.scss"
import { Avatar, Button, Card, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
const Comments = () => {
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
          <TextField
            id="outlined-textarea"
            label="Agrega tu comentario"
            className='comments__input'
            multiline
          />
          <Button className='comments__button' variant="contained">Publicar</Button>
        </div>
      </section>
    </article>
  )
}

export default Comments