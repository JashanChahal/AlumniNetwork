import React, { useContext, useState,useEffect } from 'react'
import Login from '../Auth/LoginType.js'
import {Redirect} from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, Paper } from '@material-ui/core'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';
import UpdateForm from './UpdateForm.js'
import axios from 'axios';

export default function Profile(props) {
    const [Data,setData] = useState({
        Name:'',
        Branch:'',
        Email:'',
        College:'',
        Cgpa:'',
        Year:'',
    })
 
    useEffect(() => {
        console.log(props.match.params.id) 
            axios.post('/get_user_data',{
                _id: props.match.params.id
            })   
            .then(result=>{console.log("result :")
            console.log(result)
            setData(result.data);
          }) 
        

    }, [])    
    function acceptHandler(){
        axios.post('/validate_user',{
            isauthorized: true,
            _id:props.match.params.id
        })
        props.history.push('/Dashboard');   
    
    }
    function rejectHandler(){
        axios.post('/validate_user',{
            isauthorized: false,
            _id :props.match.params.id
        })   
        props.history.push('/Dashboard');
    
    }
  
 
        return (
            <div class="container">
            {console.log(Data.Branch)}
                <div className="row justify-content-around">
                    <div className="col-md-8">
                        <Paper elevation={1} variant="elevation" square className="mt-3">
                            <Card>
                                <CardHeader
                                    avatar={<Avatar aria-label="recipe" src='#'>
                                    </Avatar>}
                                    title={Data.Name}
                                    subheader={Data.Email}
                                />
                            </Card>
                        </Paper>
                        <Card className="mt-3">
                            <CardHeader
                                title="About"
                                
                            />
                         <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                College: {Data.College}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Cgpa: {Data.Cgpa}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Branch: {Data.Branch}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Year: {Data.Year}
                            </Typography>
                        </CardContent>
                        <div className="row justify-content-end mr-3">
                        <button className="btn btn-success" onClick={acceptHandler} >Accept</button>
                        <button className="btn btn-danger" onClick={rejectHandler} >Reject</button>
                        
                        </div>
                        
                        </Card>
                    </div>
                </div>
            </div>
        )
    }

