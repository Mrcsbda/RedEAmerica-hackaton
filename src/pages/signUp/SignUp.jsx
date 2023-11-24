import React from "react";
import "./signUp.scss";
import { Autocomplete, Button, TextField, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useForm } from "react-hook-form";
import fileUpload from "../../services/fileUpload";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { createAnCompany } from "../../store/slides/auth/authThunk";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const countries = [
    "Argentina",
    "Chile",
    "Costa Rica",
    "Guatemala",
    "México",
    "Venezuela",
    "Brasil",
    "Colombia",
    "Ecuador",
    "Honduras",
    "Perú",
  ];

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleForm = async (data) => {
    const imageFile = data.logo[0];
    const image = await fileUpload(imageFile, "image");
    const newCompany = {
        ...data,
        logo: image,
        isValidate: false,
        rol: "MEMBER"
    }
    if(data.password.length < 6){
        Swal.fire(
            "Oops!", 
            "La contraseña debe tener mínimo 6 caracteres", 
            "error"
            );
    }else{
       dispatch(createAnCompany(newCompany));
       Swal.fire(
        "Excelente!",
        "Haz Creado tu cuenta, Debes esperar a que verifiques tus datos para empezar con esta experiencia!",
        "success"
       );
       navigate('/login');
    }
  };

  return (
    <main className="main__sign-up">
      <section className="main__sign-up__container">
        <figure className="main__sign-up__logo">
          <img
            src="https://www.redeamerica.org/Portals/_default/skins/2023/img/Logo.svg"
            alt="logo"
          />
        </figure>
        <form className="main__sign-up__form" onSubmit={handleSubmit(handleForm)}>
          <h3>Registro</h3>
          <TextField
            id="outlined-basic"
            label="Nombre de la Empresa"
            variant="outlined"
            className="main__sign-up__input"
            {...register("name", { required: true })}
          />
          <Autocomplete
            disablePortal
            id="country"
            options={countries}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="País" {...register("country", { required: true })} />}
            className="main__sign-up__input"
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Logo <VisuallyHiddenInput type="file" {...register("logo", {required: true})}/>
          </Button>
          <TextField
            id="outlined-basic"
            label="Telefono"
            variant="outlined"
            className="main__sign-up__input"
            {...register("phone", { required: true })}
          />
          <TextField
            id="outlined-multiline-static"
            label="Descripción"
            multiline
            rows={4}
            defaultValue=""
            className="main__sign-up__input"
            {...register("description", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="main__sign-up__input"
            {...register("email", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            className="main__sign-up__input"
            {...register("password", { required: true })}
          />
          <TextField
            id="outlined-basic"
            label="Pagina web"
            variant="outlined"
            className="main__sign-up__input"
            {...register("web")}
          />
          <TextField
            id="outlined-basic"
            label="Linkedln"
            variant="outlined"
            className="main__sign-up__input"
            {...register("linkeln")}
          />
          <TextField
            id="outlined-basic"
            label="Instagram"
            variant="outlined"
            className="main__sign-up__input"
            {...register("instagram")}
          />
          <Button variant="contained" type="submit">
            Registrarse
          </Button>
        </form>
      </section>
    </main>
  );
};

export default SignUp;
