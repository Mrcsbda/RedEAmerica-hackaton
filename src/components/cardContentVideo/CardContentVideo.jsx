import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FaVideo } from "react-icons/fa";

export default function CardContentVideo({image, title, content}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt=""
          style={{position:'relative'}}
        />
        <FaVideo style={{position:'absolute', top:'25%', left:'40%', fontSize:'3rem', color:'#82BB2C'}} />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {content}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}