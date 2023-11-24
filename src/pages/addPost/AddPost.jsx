import {Box, Button, Container, Fab, FormControl, InputLabel, MenuItem, Select, TextField,} from "@mui/material";
import {categoriesOptions, countryOptions, formatOptions} from "./constants/optionsSelect.js";
import {UploadFile, Add} from "@mui/icons-material";
import {useForm} from "react-hook-form";
import {useAddPost} from "../../hooks/addPost/useAddPost.js";

const AddPost = () => {

    const {
        register,
        handleSubmit,
        watch
    } = useForm()

    const {typeFormat, country, category} = watch()

    const {
        handlePhotoUser,
        openFileDialog,
        handleSendPost,
        imageUrl,
        fileInputRef
    } = useAddPost()


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
            <form style={{display: 'flex', gap: 25, flexDirection: 'column', width: '100%'}}
                  onSubmit={handleSubmit(handleSendPost)}>
                <img src="https://redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="logo"/>
                <TextField
                    label='Titulo'
                    variant='outlined' sx={{width: '100%'}}
                    {...register('title')}
                />
                <TextField
                    label='Contenido'
                    multiline rows={4}
                    variant='outlined'
                    sx={{width: '100%'}}
                    {...register('Content')}
                />
                <Box sx={{display: 'flex', gap: 3}}>
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Tipo de formato</InputLabel>
                        <Select
                            labelId="select-label"
                            label='Tipo de formato'
                            value={typeFormat || ''}
                            {...register('typeFormat')}
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
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Escoge tu País</InputLabel>
                        <Select
                            labelId="select-label"
                            label='Escoge un País'
                            value={country || ''}
                            {...register('country')}
                        >
                            <MenuItem disabled value=''>
                                <em>Escoge una opcion</em>
                            </MenuItem>
                            {
                                countryOptions.map(country => (
                                    <MenuItem key={country.id} value={country.country}>{country.country}</MenuItem>
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
                        {...register('category')}
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
                <Button type='submit' variant='contained'>Enviar post</Button>
            </form>
            <Box sx={{width: '100%', position: 'relative'}}>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    pb: 3,
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
                        onChange={handlePhotoUser}
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
