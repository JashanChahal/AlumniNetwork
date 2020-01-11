import React from 'react'
import {Card,CardHeader,CardMedia,CardContent,Avatar,Typography,Paper} from   '@material-ui/core'
import {Skeleton} from '@material-ui/lab'

export default function hello(props)
{

    {console.log(props.loading)}
    return (
        <Paper elevation={1} variant="elevation" square className="mt-3">
            <Card>
            <CardHeader
                avatar={    props.loading ?<Skeleton variant="circle" width={40} height={40} />:
                <Avatar aria-label="recipe"  src={props.photo}>
                </Avatar>
                }
            
        title={props.loading?  <Skeleton variant="rect"/> : props.name}
        subheader={props.loading?  <Skeleton /> : props.birthday}
      />
      { props.loading ? <Skeleton variant="rect" height={250}/> : <img src={props.photo} className="mx-auto d-block img-fluid" /> } 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.loading?  <Skeleton variant="rect"/> : props.email}
        </Typography>
      </CardContent>
      </Card>
        </Paper>
    )
}