import { Autocomplete, Button, TextField } from '@mui/material'
import React from 'react'

const EditPost = () => {
  const { postId } = useParams()
  const categories = [
    "categoria"
  ];
  return (
    <article className='contact-form'>
      <section className='contact-form__card'>
        <h1 className='contact-form__title'>Editar Publicación</h1>
        <form className='contact-form__form'>
          <TextField
            className='contact-form__input'
            type='text'
            label="Titulo"
            variant="standard"
          />
          <TextField
            label="Contenido"
            multiline
            variant="standard"
            className='contact-form__input'
          />
          <Autocomplete
            id="disable-close-on-select"
            disableCloseOnSelect
            options={categories}
            renderInput={(params) => (
              <TextField {...params} label="Categorias" variant="standard" className='contact-form__input' />
            )}
          />
          <Button variant="contained" className='contact-form__button' type="submit">Guardar Cambios</Button>
        </form>
      </section>
    </article>
  )
}

export default EditPost