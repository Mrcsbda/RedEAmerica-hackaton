import { Autocomplete, Button, TextField, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPostId, updatePost } from "../../services/posts";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import fileUpload from "../../services/fileUpload";

const EditPost = () => {
  const { postId } = useParams();
  const categories = ["video", "image"];
  const [post, setPost] = useState();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    searchPost();
  }, []);

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

  const searchPost = async () => {
    const post = await getPostId(postId);
    setPost(post);
    console.log(post);
  };

  const editPost = async (data) => {
    try {
      if (data.logo.length == 0 && data.recurs.length == 0) {
        const postEdit = {
          ...post,
          title: data.title,
          content: data.content,
        };
        const edit = await updatePost(post.id, postEdit);
      } else if (data.logo.length > 0 && data.recurs.length == 0) {
        const imageFile = data.logo[0];
        const image = await fileUpload(imageFile, "image");
        const postEdit = {
          ...post,
          title: data.title,
          content: data.content,
          logo: image
        };
        const edit = await updatePost(post.id, postEdit);
      }else if(data.logo.length == 0 && data.recurs.length > 0){
        const imageFile = data.recurs[0];
        if(data.typeFormat == "image"){
          const image = await fileUpload(imageFile, "image");
          const postEdit = {
            ...post,
            title: data.title,
            content: data.content,
            recurs: image
          };
          const edit = await updatePost(post.id, postEdit);
        }else{
          const image = await fileUpload(imageFile, "video");
          const postEdit = {
            ...post,
            title: data.title,
            content: data.content,
            recurs: image
          };
          const edit = await updatePost(post.id, postEdit);
        }  
      }else if (data.logo.length > 0 && data.recurs.length > 0){
        const imageFile = data.logo[0];
        const image = await fileUpload(imageFile, "image");
        const recursFile = data.recurs[0];
        if(data.typeFormat == "image"){
          const recursClou = await fileUpload(recursFile, "image");
          const postEdit = {
            ...post,
            title: data.title,
            content: data.content,
            logo:image,
            recurs: recursClou
          };
          const edit = await updatePost(post.id, postEdit);
        }else{
          const recursClou = await fileUpload(recursFile, "video");
          const postEdit = {
            ...post,
            title: data.title,
            content: data.content,
            logo:image,
            recurs: recursClou
          };
          const edit = await updatePost(post.id, postEdit);
        }  
      }
      Swal.fire("", "Haz actualizado el post correctamente", "success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="contact-form">
      <section className="contact-form__card">
        <h1 className="contact-form__title">Editar Publicación</h1>
        <form className="contact-form__form" onSubmit={handleSubmit(editPost)}>
          <TextField
            className="contact-form__input"
            type="text"
            label="Titulo"
            variant="standard"
            value={post?.title}
            {...register("title", { required: true })}
          />
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Logo <VisuallyHiddenInput type="file" {...register("logo")} />
          </Button>
          <TextField
            label="Contenido"
            multiline
            variant="standard"
            className="contact-form__input"
            value={post?.content}
            {...register("content", { content: true })}
          />
          {post?.typeFormat == "pdf" ? (
            <div></div>
          ) : (
            <>
              <Autocomplete
                id="disable-close-on-select"
                disableCloseOnSelect
                options={categories}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    defaultValue={post?.typeFormat}
                    label="Tipo de Formato"
                    variant="standard"
                    className="contact-form__input"
                    {...register("recurs")}
                  />
                )}
              />
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Recurso <VisuallyHiddenInput type="file" />
              </Button>
            </>
          )}

          <Button
            variant="contained"
            className="contact-form__button"
            type="submit"
          >
            Guardar Cambios
          </Button>
        </form>
      </section>
    </article>
  );
};

export default EditPost;
