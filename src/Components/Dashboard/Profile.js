import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import Login from '../Auth/LoginType.js'
import {Redirect} from 'react-router-dom';
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, Paper } from '@material-ui/core'
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';
import UpdateForm from './UpdateForm.js'
export default function Profile() {
    const [authState, changeAuthState] = useContext(AuthContext)
    const [On,setOn]= useState(false)
    const [redirectstate,setredirectstate]=useState(false)
    
    const ClickHandler = (e)=>{
        setredirectstate(!redirectstate)
    }
    if (!authState.LoggedIn) {
        return (
            <div>
                <h1>Please Log in to view this page</h1>
                <Login></Login>

            </div>
        )
    }
   else if(redirectstate)
    return <Redirect to="/updateForm/" />
    else {
        return (
            <div class="container">
                
            {console.log(authState.Branch)}
                <div className="row justify-content-around">
                    <div className="col-md-8">
                        <Paper elevation={1} variant="elevation" square className="mt-3">
                            <Card>
                                <CardHeader
                                    avatar={<Avatar aria-label="recipe" src='#'>
                                    </Avatar>}
                                    title={authState.Name}
                                    subheader={authState.Email}
                                />
                            </Card>
                        </Paper>
                        <Card className="mt-3">
                            <CardHeader
                                title="About"
                                
                            />
                         <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                College: {authState.College}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Cgpa: {authState.Cgpa}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Branch: {authState.Branch}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Year: {authState.Year}
                            </Typography>
                        </CardContent>
                        <div className="row justify-content-end mr-3">
                        <IconButton  type="button" onClick={ClickHandler}>
                        <EditRoundedIcon/>
                        </IconButton>
                        
                        </div>
                        
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}
