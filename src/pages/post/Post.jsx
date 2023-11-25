import {Box, Button, Rating, Typography, useTheme} from "@mui/material";
import {Instagram, LinkedIn, Mail, SwipeRight} from '@mui/icons-material'
import {Link} from "react-router-dom";

const Post = () => {
    const theme = useTheme()
    return (
        <Box sx={{width: '100%', display: 'flex', mb: 3, p:5, gap:3}}>
            <Box sx={{width: '50%', pt: 3, position: 'relative'}}>
                <Typography variant='h3' sx={{mb:2}}>Titulo del post</Typography>
                <Box sx={{height: '65%'}}>
                    <embed src='https://res.cloudinary.com/cloudmulti/image/upload/v1700856847/Prueba/cjaiclzs6mrmnravb5ck.pdf' type="application/pdf" width="100%"
                           height="100%"/>
                </Box>
                <Box sx={{position: 'absolute', bottom: 0}}>
                    <Typography variant='body1' sx={{fontSize: 20, mt: 3}}>
                        La Fundación TEC anunció hoy la creación de nuevos programas de
                        becas para estudiantes de bajos recursos. Estos programas, que se
                        financiarán con donaciones privadas, brindarán a los estudiantes
                        la oportunidad de acceder a una educación de alta calidad en el Tecnológico de Monterrey.
                    </Typography>
                    <Button variant='contained' sx={{mt: 3}}>Crear comentario</Button>
                </Box>
            </Box>
            <Box sx={{width: '50%', pt: 3}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant='h6' >
                        12/02/2022
                    </Typography>
                    <Typography variant='h6' >
                        Colombia
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    p:2,
                    alignItems: 'center', bgcolor: `${theme.palette.primary.dark}`, borderRadius: 2}}>
                    <img src="https://fundacionarcor.org/wp-content/themes/fundacion-theme/img/home//logo-fundacion.png"
                         alt="logo empresa"/>
                    <Typography variant='h3' sx={{color: '#ffffff'}}>Fundación Arcor</Typography>
                </Box>
                <Box sx={{p: 3}}>
                    <Box sx={{pt: 3}}>
                        <Typography variant='subtitle1' sx={{fontSize: 25}}>Quienes somos?</Typography>
                        <Typography variant='body1' sx={{fontSize: 20}}>
                            Fundación Arcor es una entidad sin fines de lucro, fue creada en diciembre de 1991
                            por Grupo ARCOR como expresión del compromiso y la responsabilidad social heredados
                            de los fundadores de la empresa, a fin de promover de manera orgánica y corporativa,
                            el desarrollo integral de las comunidades donde actúa.
                        </Typography>
                    </Box>
                    <Rating
                        name="rating"
                        value={3}
                    />
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt:5}}>
                        <Link to='/profile/1'>
                            <Button sx={{fontSize: 20}}>Ver mas posts</Button>
                        </Link>
                        <SwipeRight sx={{fontSize: 80}} />
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',position: 'absolute',bottom: 30, left: '65%'}}>
                        <Typography variant='h4'>nuestras redes sociales</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'center', gap: 5}}>
                            <Instagram sx={{fontSize: '4rem'}}/>
                            <LinkedIn sx={{fontSize: '4rem'}}/>
                            <Mail sx={{fontSize: '4rem'}}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Post
