import React,{useContext,useEffect,useState} from 'react'
import {Card,CardHeader,CardMedia,CardContent,Avatar,Typography,Paper, IconButton} from   '@material-ui/core'
import {Skeleton} from '@material-ui/lab'
import {AuthContext} from '../../Context/AuthContext'
import axios from 'axios'
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';



export default function Hello(props)
{
  
  const [authState,setAuthState]= useContext(AuthContext)
  const [like,changeLike] =useState({ status: props.hasLiked})


    function handleClick(){
        changeLike(!like)
  }
    useEffect(()=>
      changeLike(props.hasLiked)
    ,[props.hasLiked])
    let photograph;
    if(props.photo)
    photograph = props.loading ? <Skeleton variant="rect" height={250}/> : <img src={'/'+props.photo} className="mx-auto d-block img-fluid" /> 
    return (
        <Paper elevation={1} variant="elevation" square className="mt-3">
          {console.log('we are rendring')}
            <Card>
            <CardHeader
                avatar={ props.loading ?<Skeleton variant="circle" width={40} height={40} />:
                <Avatar aria-label="recipe"  src={props.photo}>
                </Avatar>
                }
            
        title={props.loading?  <Skeleton variant="rect"/> : props.name}
        subheader={props.loading?  <Skeleton /> : props.date}
      />
      <div className="p-2">{props.content}</div>
      {photograph} 
      <br/>
      
        {props.loading ? <Skeleton variant="rect"/>  :
      <CardContent>
        <IconButton onClick={handleClick} > <ThumbUpAltTwoToneIcon fontSizeLarge color={like? 'primary' : 'action'}/>  </IconButton>
        <div>Likes: {like? props.likes+1 : props.likes}</div> 
      </CardContent>
        }
      </Card>
        </Paper>
    )
}