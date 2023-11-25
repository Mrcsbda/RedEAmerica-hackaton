import {Box, Button, LinearProgress, Rating, Typography, useTheme} from "@mui/material";
import {Instagram, LinkedIn, Mail, SwipeRight} from '@mui/icons-material'
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostById} from "../../services/posts.js";
const Post = () => {

    const [detail, setDetail] = useState(null);
    const theme = useTheme()

    const {postId} = useParams();

    console.log(postId)

    useEffect(() => {
        getPostById(postId).then(res => {
            setDetail(res)
        }).catch(err => {
            console.log(err)
        })
    }, [postId]);

    return (
        <>
            {
                detail === null ? (
                    <Box sx={{p:3}}>
                        <LinearProgress color="secondary" />
                    </Box>
                ):(
                    <Box sx={{width: '100%', display: 'flex', mb: 3, p:5, gap:3}}>
                        <Box sx={{width: '50%', pt: 3, position: 'relative'}}>
                            <Typography variant='h3' sx={{mb:2}}>{detail.post.title}</Typography>
                            <Box sx={{height: '65%'}}>
                                <embed src={detail.post.recurs} type="application/pdf" width="100%"
                                       height="100%"/>
                            </Box>
                            <Box sx={{position: 'absolute', bottom: 0}}>
                                <Typography variant='body1' sx={{fontSize: 20, mt: 3}}>{detail.post.content}</Typography>
                                <Link to='/home/comments/12'>
                                    <Button variant='contained' sx={{mt: 3}}>Crear comentario</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{width: '50%', pt: 3}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography variant='h6' >
                                    12/02/2022
                                </Typography>
                                <Typography variant='h6' >{detail.company.country}</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                p:2,
                                alignItems: 'center', bgcolor: `${theme.palette.primary.dark}`, borderRadius: 2}}>
                                <img src={detail.company.logo}
                                     style={{width: '50%', height: '100px'}}
                                     alt="logo empresa"/>
                                <Typography variant='h3' sx={{color: '#ffffff'}}>{detail.company.name}</Typography>
                            </Box>
                            <Box sx={{p: 3}}>
                                <Box sx={{pt: 3}}>
                                    <Typography variant='subtitle1' sx={{fontSize: 25}}>Quienes somos?</Typography>
                                    <Typography variant='body1' sx={{fontSize: 20}}>
                                        {detail.company.description}
                                    </Typography>
                                </Box>
                                <Rating
                                    name="rating"
                                    value={3}
                                />
                                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', pt:5}}>
                                    <Link to='/home/profile/1'>
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

        </>
    )
}
export default Post
