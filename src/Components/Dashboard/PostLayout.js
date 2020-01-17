import React,{useContext,useEffect,useState} from 'react'
import {Card,CardHeader,CardMedia,CardContent,Avatar,Typography,Paper, IconButton} from   '@material-ui/core'
import {Skeleton} from '@material-ui/lab'
import {AuthContext} from '../../Context/AuthContext'
import axios from 'axios'
import ThumbUpAltTwoToneIcon from '@material-ui/icons/ThumbUpAltTwoTone';



export default function Hello(props)
{

  const [authState,setAuthState]= useContext(AuthContext)
  const [like,changeLike] =useState(props.hasLiked)
  console.log('we recieved '+ props.hasLiked)
    function handleClick(){
        changeLike(!like)
  }
    useEffect(
      ()=>{ console.log('i have set it to '+like)
    }
    ,[like])

    return (
        <Paper elevation={1} variant="elevation" square className="mt-3">
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
      { props.loading ? <Skeleton variant="rect" height={250}/> : <img src={'/'+props.photo} className="mx-auto d-block img-fluid" /> } 
      <br/>
      {
        props.loading ? <Skeleton variant="rect"/>  :
      <CardContent>
      { console.log('hey see'+like)}
        <IconButton onClick={handleClick} > <ThumbUpAltTwoToneIcon fontSizeLarge color={like ? 'primary' : 'inherit'}/>  </IconButton>
        <div>Likes: {like? props.likes+1 : props.likes}</div> 
      </CardContent>
      }
      </Card>
        </Paper>
    )
}