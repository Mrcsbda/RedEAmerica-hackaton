import {Box, Typography, useTheme} from "@mui/material";
import {Instagram, LinkedIn} from '@mui/icons-material'

const Post = () => {

    const theme = useTheme()

    return (
        <Box sx={{border: 2, width: '100%', display: 'flex', mb: 3}}>
            <Box sx={{width: '50%', pt: 3}}>
                <embed src='https://res.cloudinary.com/dazfdevly/raw/upload/v1700838059/empresas-logos/zkjoyqesoubaf5wruulp.pdf' type="application/pdf" width="100%"
                       height="100%"/>
            </Box>
            <Box sx={{width: '50%', bgcolor: `${theme.palette.primary.main}`, pt: 3}}>
                <Box sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <img src="https://fundacionarcor.org/wp-content/themes/fundacion-theme/img/home//logo-fundacion.png"
                         alt="logo empresa"/>
                    <Typography variant='h3'>Fundación Arcor</Typography>
                </Box>
                <Box sx={{p: 3}}>
                    <Box sx={{pt: 3}}>
                        <Typography variant='subtitle1' sx={{fontSize: 25}}>Descripcion</Typography>
                        <Typography variant='body1' sx={{fontSize: 20}}>
                            Fundación Arcor es una entidad sin fines de lucro, fue creada en diciembre de 1991
                            por Grupo ARCOR como expresión del compromiso y la responsabilidad social heredados
                            de los fundadores de la empresa, a fin de promover de manera orgánica y corporativa,
                            el desarrollo integral de las comunidades donde actúa.
                        </Typography>
                    </Box>
                    <Box sx={{pt: 3}}>
                        <Typography variant='h4'>Siguenos en nuestras redes sociales</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', pt: 3, gap: 5}}>
                            <Instagram sx={{fontSize: '4rem'}}/>
                            <LinkedIn sx={{fontSize: '4rem'}}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Post
