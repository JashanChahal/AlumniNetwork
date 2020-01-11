import React, { Component,useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {CircularProgress} from '@material-ui/core';
import "./register.css";
import axios from 'axios'
import { isObject } from 'util';
// import {io} from 'socket.io';
import { Socket } from 'dgram';
import io from 'socket.io-client';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
var socket = io('http://10.42.0.97:8080', { transport: ['websocket'] });

socket.on('notification', (res) => {
    
    console.log(res);
})

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
export default function Register(props) {

    const [loading, setLoading] = useState(false)
    const [errorMessage,setErrorMessage]=useState(false)
    const [state,setState]=useState({
            Name: '',
            Password: '',
            FatherName: '',
            MotherName: '',
            Email: '',
            Year: '',
            Branch: '',
            Cgpa: '',
            College: '',
            WorkExperience: '',
            Type: 'Alumini',
            formErrors: {
                Name: '',
                Password: '',
                FatherName: '',
                MotherName: '',
                Email: '',
                Year: '',
                Branch: '',
                Cgpa: ''      } })
      
    function submitHandler(e){
        e.preventDefault()
        if (formValid(state)) {
            setLoading(true)
            var obj = JSON.parse(JSON.stringify(state));
           
            delete obj.formErrors;
            axios.post('http://10.42.0.97:8080/register',obj)
            .then(res => {
                console.log(res)
                setLoading(false)
                 props.history.push("/")    
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
            case "Password":
                let val = true;
                if (value.length < 6)
                    val = false;
                var numUpper = (value.match(/[A-Z]/g) || []).length;
                if (numUpper == 0 || numUpper == value.length)
                    val = false;
                if (val == false)
                    formErrors.Password = "Password should be combination of uppercase and lowercase letters with minimum 6 letters";
                else
                    formErrors.Password = ""
                break;
            case "MotherName":
                formErrors.MotherName =
                    value.length < 3 && value.length > 0
                        ? "minimum 3 characters required"
                        : "";
                break;
            case "FatherName":
                formErrors.FatherName =
                    value.length < 3 && value.length > 0
                        ? "minimum 3 characters required"
                        : "";
                break;
            case "Email":
                formErrors.Email = emailRegex.test(value) && value.length > 0
                    ? ""
                    : "invalid email address";
                break;
            case "Year":
                if (Number(value) > 1970 && Number(value) < 2020)
                    formErrors.Year = "";
                else
                    formErrors.Year = "Enter a valid year";
                break;
            case "Branch":
                formErrors.Branch =
                    value.length < 3 && value.length > 0
                        ? "minimum 3 characters required"
                        : "";
                break;
            case "Cgpa":
                formErrors.Cgpa =
                    Number(value) >= 4 && Number(value) <= 10
                        ? "" : "Invalid Cgpa"
                break;
            default:
                break;


        }
        setState({ ...state, formErrors:{...state.formErrors,formErrors}, [name]: e.target.value })
    }
        var { Name, Password, FatherName, MotherName, Email, Year, Branch, Cgpa, College, WorkExperience,Type,formErrors } = state
        console.log(formErrors)
        return (
            <div style={{pointerEvents: loading?'none':'auto'}} className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    {/* <p className="lead"><FontAwesomeIcon icon={faUser} /> Create Your Account</p> */}
                    <form onSubmit={submitHandler} noValidate>
                    {errorMessage && <div className="alert alert-danger col">Please check your Internet Connection</div>}
           
                        <div className="Name">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" id="Name" className={formErrors.Name.length > 0 ? "error" : null} value={Name} onChange={changeHandler} noValidate />
                            {(formErrors.Name.length > 0) && (
                                <span className="errorMessage">{formErrors.Name}</span>
                            )}
                        </div>

                        <div className="MotherName">
                            <label htmlFor="MotherName">Mother Name</label>
                            <input type="text" name="MotherName" id="MotherName" className={formErrors.MotherName.length > 0 ? "error" : null} value={MotherName} onChange={changeHandler} noValidate />
                            {(formErrors.MotherName.length > 0) && (
                                <span className="errorMessage">{formErrors.MotherName}</span>
                            )}
                        </div>


                        <div className="FatherName">
                            <label htmlFor="FatherName">Father Name</label>
                            <input type="text" name="FatherName" id="FatherName" className={formErrors.FatherName.length > 0 ? "error" : null} value={FatherName} onChange={changeHandler} />
                            {(formErrors.FatherName.length > 0) && (
                                <span className="errorMessage">{formErrors.FatherName}</span>
                            )}
                        </div>


                        <div className='Email'>
                            <label htmlFor="Email">Email</label>
                            <input type="text" name="Email" id="Email" className={formErrors.Email.length > 0 ? "error" : null} value={Email} onChange={changeHandler} />
                            {(formErrors.Email.length > 0) && (
                                <span className="errorMessage">{formErrors.Email}</span>
                            )}
                        </div>

                        <div className="Password">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="Password" id="Password" className={formErrors.Password.length > 0 ? "error" : null} value={Password} onChange={changeHandler} />
                            {(formErrors.Password.length > 0) && (
                                <span className="errorMessage">{formErrors.Password}</span>
                            )}
                        </div>

                        <div className='Year'>
                            <label htmlFor="Year">Year</label>
                            <input type="year" name="Year" id="Year" className={formErrors.Year.length > 0 ? "error" : null} value={Year} onChange={changeHandler} />
                            {(formErrors.Year.length > 0) && (
                                <span className="errorMessage">{formErrors.Year}</span>
                            )}
                        </div>

                        <div className="Branch">
                            <label htmlFor="Branch">Branch</label>
                            <input type="text" name="Branch" id="Branch" className={formErrors.Branch.length > 0 ? "error" : null} value={Branch} onChange={changeHandler} />
                            {(formErrors.Branch.length > 0) && (
                                <span className="errorMessage">{formErrors.Branch}</span>
                            )}
                        </div>

                        <div className="Cgpa">
                            <label htmlFor="Cgpa">Cgpa</label>
                            <input type="text" name="Cgpa" id="Cgpa" className={formErrors.Cgpa.length > 0 ? "error" : null} value={Cgpa} onChange={changeHandler} />
                            {(formErrors.Cgpa.length > 0) && (
                                <span className="errorMessage">{formErrors.Cgpa}</span>
                            )}
                        </div>

                        <div className="WorkExperience">
                            <label htmlFor="WorkExperience">Work Experience</label>
                            <input type="text" name="WorkExperience" id="WorkExperience" value={WorkExperience} onChange={changeHandler} />
                        </div>

                        <div className="College">
                            <label htmlFor="College">College</label>
                            <input type="text" name="College" id="College" value={College} onChange={changeHandler} />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have Account?  <Link to="/login">Sign In</Link></small>
                        </div>
                        {loading && <CircularProgress size={54} style={{ position:'absolute', top: '50%',left: '50%' }}/> }
       
                    </form>
                </div>
            </div >
        )
    }

