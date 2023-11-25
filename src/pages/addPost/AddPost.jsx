import {Alert, Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {categoriesOptions, formatOptions} from "./constants/optionsSelect.js";
import {UploadFile, Add} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {useAddPost} from "../../hooks/addPost/useAddPost.js";
import {useSelector} from "react-redux";
import {validationFormPost} from "./validateForm.js";
import {optionsFormValidate} from "./constants/optionsValidateForm.js";
import ModalError from "../../components/ModalError/ModalError.jsx";

const AddPost = () => {

    const {userLogged} = useSelector(state => state.auth);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors},
        setValue
    } = useForm()

    const {typeFormat, category} = watch()

    const {
        handleRecurUser,
        openFileDialog,
        handleSendPost,
        handleImagePost,
        openFileImagePost,
        fileImagePost,
        imagePost,
        imageUrl,
        fileInputRef
    } = useAddPost(userLogged.id)

    const errorsList = validationFormPost(errors)
    console.log(errorsList)


    return (
        <Container maxWidth='xl' sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            p: 2,
            gap: 2,
            borderRadius: 5,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.4)'
        }}>
            <ModalError errors={errorsList} />
            <form style={{display: 'flex', gap: 25, flexDirection: 'column', width: '100%', position: 'relative'}}
                  onSubmit={handleSubmit(handleSendPost)}>
                <img src="https://redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="logo" style={{width: '100%', height: '100px'}}/>
                <TextField
                    label='Titulo'
                    variant='outlined' sx={{width: '100%'}}
                    {...register('title', optionsFormValidate.optTittle)}
                />
                <TextField
                    label='Contenido'
                    multiline rows={4}
                    variant='outlined'
                    sx={{width: '100%'}}
                    {...register('content', optionsFormValidate.optContent)}
                />
                <Box sx={{display: 'flex', gap: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Tipo de formato</InputLabel>
                        <Select
                            labelId="select-label"
                            label='Tipo de formato'
                            value={typeFormat || ''}
                            {...register('typeFormat', optionsFormValidate.optTypeFormat)}
                            onChange={(e) =>{
                                setValue('typeFormat', e.target.value, {shouldValidate: true})
                            }}
                        >
                            <MenuItem disabled value=''>
                                <em>Escoge una opcion</em>
                            </MenuItem>
                            {
                                formatOptions.map(format => (
                                    <MenuItem
                                        key={format.id}
                                        value={format.format}>{format.format}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Box>
                <FormControl fullWidth>
                    <InputLabel id="select-label">Categoria</InputLabel>
                    <Select
                        labelId="select-label"
                        label='Categoria'
                        value={category || ''}
                        {...register('category', optionsFormValidate.optCategory)}
                        onChange={(e) =>{
                            setValue('category', e.target.value, {shouldValidate: true})
                        }}
                    >
                        <MenuItem disabled value=''>
                            <em>Escoge una opcion</em>
                        </MenuItem>
                        {
                            categoriesOptions.map(category => (
                                <MenuItem key={category.id} value={category.category}>{category.category}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                <Box sx={{display: 'flex', height: '200px', gap: 2,alignItems: 'center', justifyContent: 'space-between'}}>
                    <Button
                        variant='contained'
                        sx={{width: '50%', height: 50}}
                        endIcon={<UploadFile />}
                        onClick={openFileImagePost}
                    >Agregar imagen del post
                    </Button>
                    <input
                        type='file'
                        ref={fileImagePost}
                        style={{display: 'none'}}
                        onChange={handleImagePost}
                    />
                    <Box sx={{width: '50%'}}>
                        {
                            imagePost && (
                                <img src={imagePost} alt="image-post" style={{width: '100px'}}/>
                            )
                        }
                    </Box>
                </Box>
                <Button
                    sx={{position: 'absolute', bottom: 0, width: '100%'}}
                    type='submit'
                    variant='contained'>Enviar post</Button>
            </form>
            <Box sx={{width: '100%', position: 'relative'}}>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}>
                    <Button
                        variant='contained'
                        sx={{width: '100%'}}
                        endIcon={<UploadFile />}
                        onClick={openFileDialog}
                    >Agregar Recurso
                    </Button>
                    <input
                        type='file'
                        ref={fileInputRef}
                        style={{display: 'none'}}
                        onChange={handleRecurUser}
                    />
                </Box>
                <Box sx={{height: '90%'}}>
                    {
                        !imageUrl && (
                            <Box sx={{position: 'absolute', top: '30%', left: '35%'}}>
                                <Add sx={{opacity: 0.3, fontSize: '10rem', strokeWidth: 20}}/>
                            </Box>
                        )
                    }
                    <embed src={imageUrl} type="application/pdf" width="100%" height="100%"/>
                </Box>
            </Box>
        </Container>
    )
}

export default AddPost
