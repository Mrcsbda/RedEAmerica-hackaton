import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FaFileVideo } from "react-icons/fa6";

export default function CardContentVideo({image, title, content}) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt=""
          style={{position:'relative', opacity:'1'}}
        />
        <FaFileVideo style={{position:'absolute', top:'25%', left:'40%', fontSize:'3rem', color:'#004632', padding:'10px', backgroundColor:'#CDF273', borderRadius:'10px'}} />
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