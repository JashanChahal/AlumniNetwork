import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./register.css";
import axios from 'axios'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: null,
            Password:null,
            FatherName: null,
            MotherName: null,
            Email: null,
            Year: null,
            Subject: null,
            Cgpa: null,
            College: null,
            WorkExperience: null,
            Type: 'Alumini',
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // axios.post('http://localhost:8080/register',this.state);
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const mystyle = {
            width: "500px",
            margin: "auto"
        }
        const { Name,Password,FatherName, MotherName, Email, Year, Subject, Cgpa, College, WorkExperience } = this.state
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    {/* <p className="lead"><FontAwesomeIcon icon={faUser} /> Create Your Account</p> */}
                    <form onSubmit={this.submitHandler} noValidate>
                        
                        <div className="firstName">
                            <label for="Name">Name</label>
                            <input type="text" name="Name" id="Name" className="form-control" value={Name} onChange={this.changeHandler} novalidate />
                        </div>

                        <div className="MotherName">
                            <label for="MotherName">Mother Name</label>
                            <input type="text" name="MotherName" id="MotherName" className="form-control" value={MotherName} onChange={this.changeHandler} />
                        </div>
                        
                        <div className="FatherName">
                            <label for="FatherName">Father Name</label>
                            <input type="text" name="FatherName" id="FatherName" className="form-control" value={FatherName} onChange={this.changeHandler} />
                        </div>


                        <div className='Email'>
                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" className="form-control" value={Email} onChange={this.changeHandler} />
                        </div>
                        
                        <div className="Password">
                            <label for="Password">Password</label>
                            <input type="password" name="Password" id="Password" className="form-control" value={Password} onChange={this.changeHandler} />
                        </div>
                        
                        <div className='Year'>
                            <label for="Year">Year</label>
                            <input type="year" name="Year" id="Year" className="form-control" value={Year} onChange={this.changeHandler} />
                        </div>

                        <div className="Subject">
                            <label for="Subject">Subject</label>
                            <input type="text" name="Subject" id="Subject" className="form-control" value={Subject} onChange={this.changeHandler} />
                        </div>

                        <div className="Cgpa">
                            <label for="Cgpa">Cgpa</label>
                            <input type="text" name="Cgpa" id="Cgpa" className="form-control" value={Cgpa} onChange={this.changeHandler} />
                        </div>

                        <div className="WorkExperience">
                            <label for="WorkExperience">Work Experience</label>
                            <input type="text" name="WorkExperience" id="WorkExperience" className="form-control" value={WorkExperience} onChange={this.changeHandler} />
                        </div>

                        <div className="College">
                            <label for="College">College</label>
                            <input type="text" name="College" id="College" className="form-control" value={College} onChange={this.changeHandler} />
                        </div>
                        <div className="createAccount">
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Register