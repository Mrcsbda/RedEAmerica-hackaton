import React from 'react';
import './login.scss';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginWithEmailAndPassword } from '../../store/slides/auth/authThunk';

const Login = () => {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(loginWithEmailAndPassword(data));
  }

  return (
    <main className='main__login'>
      <section className='main__login__info'>
      <figure className="main__login__logo">
          <img
            src="https://www.redeamerica.org/Portals/_default/skins/2023/img/Logo.svg"
            alt="logo"
          />
        </figure>
        <form className='main__login__form' onSubmit={handleSubmit(onSubmit)}>
        <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="main__login__input"
            {...register("email", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            className="main__login__input"
            {...register("password", { required: true })}
          />
          <Button variant="contained" type="submit">
            Iniciar sesión
          </Button>
        </form>
      </section>
    </main>
  )
}

export default Login