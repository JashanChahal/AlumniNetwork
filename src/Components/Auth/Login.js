import React, { useState,useContext} from 'react'
import './login.css'
import axios from 'axios'
import {AuthContext} from '../../Context/AuthContext'
import {TextField,CircularProgress} from '@material-ui/core';
export default function Login(props) {
    
    const [authState,changeAuthState]=useContext(AuthContext)

    
    const [loading, setLoading] = useState(false)
    const [errorMessage,setErrorMessage]=useState(false)
    const [formData, changeData] = useState({
        email: "",
        password: ""
    })

    function handleChange(e) {
        var { type, value } = e.target;
        switch (type) {
            case "email":
                formData.email= value;
            break;
            case "password":
                formData.password= value;
            break;
            default: break;
        }
        changeData(formData);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('inside submit')
        setLoading(true);
        axios.post('http://10.42.0.97:8080/Login', {
            Type: "Alumni",
            Email: formData.email,
            Password: formData.password
        })
            .then(res => {
                console.log(res)
                setLoading(false)
                changeAuthState({ ...authState,LoggedIn:true,...res} )
                props.history.push("/");
                console.log('we are going out of here')
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(true);
                })
        console.log('handled submit')
    }

    return (
        <form style={{pointerEvents: loading?'none':'auto'}} onSubmit={handleSubmit} className="flex-column container col-10 col-md-6 col-lg-4 loginForm p-4" >
            {errorMessage && <div className="alert alert-danger">Please Enter a valid email and password</div>}
            {console.log(props.match.params.type)}
                
             <div className="form-group ">
                <TextField  label="Email"  variant="outlined" required  type="email" fullWidth onChange={handleChange}/> 
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <TextField  label="Password"  variant="outlined" required  type="password" fullWidth onChange={handleChange}/>
            </div>

            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary col" style={{ backgroundColor: '#519e8a' }}>Submit</button>
            {loading && <CircularProgress size={24} style={{ position:'absolute', top: '40%',left: '45%', zIndex: '100' }}/> }
        </form>

    )



}