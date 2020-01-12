import React,{useContext} from 'react'
import {Card,CardHeader,CardMedia,CardContent,Avatar,Typography,Paper} from   '@material-ui/core'
import {Skeleton} from '@material-ui/lab'
import {AuthContext} from '../../Context/AuthContext'
import axios from 'axios'


export default function Hello(props)
{

  const [authState,setAuthState]= useContext(AuthContext)

    function handleClick(){
      axios.post('/posts/like_post',{
            Id: props.postId,
            UserId: authState._id         
      }).then(res=> console.log(res))
      .catch(err=> console.log('error'))
  }


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
      { props.loading ? <Skeleton variant="rect" height={250}/> : <img src={'http://192.168.137.191:8080/'+props.photo} className="mx-auto d-block img-fluid" /> } 
      <CardContent>
      <button onClick={handleClick}>Like</button>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.loading?  <Skeleton variant="rect"/> : <p> <span> {props.likes} </span>  <span> {props.comments} </span> </p>}
        </Typography>
      </CardContent>
      </Card>
        </Paper>
    )
}