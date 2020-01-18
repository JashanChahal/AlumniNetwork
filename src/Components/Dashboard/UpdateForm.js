import React, { Component,useState,useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {CircularProgress} from '@material-ui/core';
import "./UpdateForm.css";
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { isObject } from 'util';
// import {io} from 'socket.io';
import { Socket } from 'dgram';
import io from 'socket.io-client';
import {hashHistory} from 'react-router';
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const formValid = state => {
    let valid = true
    Object.values(state).forEach(item=>{
        if(typeof item === 'object')
            Object.values(item).forEach(error=>  { error.length > 0 && (valid = false); })
        else
            (item.length === 0) &&(valid=false); 
        
    })
    
    return valid;
}
export default function UpdateForm(props) {
    var [authContext, setAuthContext] = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [errorMessage,setErrorMessage]=useState(false)
    const [state,setState]=useState({

            WorkExperience: authContext.WorkExperience,
            _id : authContext._id,
            formErrors: {
                Name: '',
                Email: '',
            } })
      
    function submitHandler(e){
        e.preventDefault()
        if (formValid(state)) {
            setLoading(true)
            var obj = JSON.parse(JSON.stringify(state));
           
            delete state.formErrors;
            axios.post('/update_users',state)
            .then(res => {
                console.log(res)
                axios.post('/get_user_data',
                {
                    _id: authContext._id
                }
                )
                .then(
                    res =>{
                        res.data.LoggedIn = true;
                        setAuthContext(res.data);
                    }
                )
                  
                setLoading(false)
                 props.history.push("/Dashboard")    
             })
            .catch(err => {
                setLoading(false)
                setErrorMessage(true);
                }) 

        }
    }
    function changeHandler(e){
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = state.formErrors;
        switch (name) {
            case "Name":

                if (value.length < 3 && value.length > 0)
                    formErrors.Name = "minimum 3 characters required"
                else
                    formErrors.Name = "";

                break;


            case "Email":
                formErrors.Email = emailRegex.test(value) && value.length > 0
                    ? ""
                    : "invalid email address";
                break;

            default:
                break;


        }
        setState({ ...state, formErrors:{...state.formErrors,formErrors}, [name]: e.target.value })
    }
        var { Name,Email, Cgpa, College, WorkExperience,Type,formErrors } = state
        console.log(formErrors)
        return (
            <div style={{pointerEvents: loading?'none':'auto'}} className="wrapper">
                <div className="form-wrapper">
                    <h1>Update Your Details</h1>
                    {errorMessage && <div className="alert alert-danger col">Please check your Internet Connection</div>}
                    {/* <p className="lead"><FontAwesomeIcon icon={faUser} /> Create Your Account</p> */}
                    <form onSubmit={submitHandler} noValidate>
                    


                        <div className="WorkExperience">
                            <label htmlFor="WorkExperience">Work Experience</label>
                            <textarea rows="9" className="form-control " style={{width:"200%"}} type="text" name="WorkExperience" id="WorkExperience" value={WorkExperience} onChange={changeHandler}></textarea>
                        </div>


                        <div className="createAccount">
                            <button type="submit">Update</button>
                            
                        </div>
                        <div className="danger">
                        <button  onClick={()=> props.history.push("/Dashboard")}>Cancel</button>
                        </div>
                        {loading && <CircularProgress size={54} style={{ position:'absolute', top: '50%',left: '50%' }}/> }
       
                    </form>
                </div>
            </div >
        )

    }

