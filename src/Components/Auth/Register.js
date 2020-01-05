import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./register.css";
import axios from 'axios'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    }
    );
    return valid;
}
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Password: '',
            FatherName: '',
            MotherName: '',
            Email: '',
            Year: '',
            Subject: '',
            Cgpa: '',
            College: '',
            WorkExperience: '',
            type: 'Alumini',
            formErrors: {
                Name: '',
                Password: '',
                FatherName: '',
                MotherName: '',
                Email: '',
                Year: '',
                Subject: '',
                Cgpa: ''

            }
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        if (formValid(this.state.formErrors)) {
            console.log(this.state)
        }
    }
    changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
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
            case "Subject":
                formErrors.Subject =
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

        this.setState({ formErrors, [name]: e.target.value })
    }
    render() {
        const { Name, Password, formErrors, FatherName, MotherName, Email, Year, Subject, Cgpa, College, WorkExperience } = this.state
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Create Account</h1>
                    {/* <p className="lead"><FontAwesomeIcon icon={faUser} /> Create Your Account</p> */}
                    <form onSubmit={this.submitHandler} noValidate>

                        <div className="Name">
                            <label for="Name">Name</label>
                            <input type="text" name="Name" id="Name" className={formErrors.Name.length > 0 ? "error" : null} value={Name} onChange={this.changeHandler} noValidate />
                            {(formErrors.Name.length > 0) && (
                                <span className="errorMessage">{formErrors.Name}</span>
                            )}
                        </div>

                        <div className="MotherName">
                            <label for="MotherName">Mother Name</label>
                            <input type="text" name="MotherName" id="MotherName" className={formErrors.MotherName.length > 0 ? "error" : null} value={MotherName} onChange={this.changeHandler} noValidate />
                            {(formErrors.MotherName.length > 0) && (
                                <span className="errorMessage">{formErrors.MotherName}</span>
                            )}
                        </div>


                        <div className="FatherName">
                            <label for="FatherName">Father Name</label>
                            <input type="text" name="FatherName" id="FatherName" className={formErrors.FatherName.length > 0 ? "error" : null} value={FatherName} onChange={this.changeHandler} />
                            {(formErrors.FatherName.length > 0) && (
                                <span className="errorMessage">{formErrors.FatherName}</span>
                            )}
                        </div>


                        <div className='Email'>
                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" className={formErrors.Email.length > 0 ? "error" : null} value={Email} onChange={this.changeHandler} />
                            {(formErrors.Email.length > 0) && (
                                <span className="errorMessage">{formErrors.Email}</span>
                            )}
                        </div>

                        <div className="Password">
                            <label for="Password">Password</label>
                            <input type="password" name="Password" id="Password" className={formErrors.Password.length > 0 ? "error" : null} value={Password} onChange={this.changeHandler} />
                            {(formErrors.Password.length > 0) && (
                                <span className="errorMessage">{formErrors.Password}</span>
                            )}
                        </div>

                        <div className='Year'>
                            <label for="Year">Year</label>
                            <input type="year" name="Year" id="Year" className={formErrors.Year.length > 0 ? "error" : null} value={Year} onChange={this.changeHandler} />
                            {(formErrors.Year.length > 0) && (
                                <span className="errorMessage">{formErrors.Year}</span>
                            )}
                        </div>

                        <div className="Subject">
                            <label for="Subject">Subject</label>
                            <input type="text" name="Subject" id="Subject" className={formErrors.Subject.length > 0 ? "error" : null} value={Subject} onChange={this.changeHandler} />
                            {(formErrors.Subject.length > 0) && (
                                <span className="errorMessage">{formErrors.Subject}</span>
                            )}
                        </div>

                        <div className="Cgpa">
                            <label for="Cgpa">Cgpa</label>
                            <input type="text" name="Cgpa" id="Cgpa" className={formErrors.Cgpa.length > 0 ? "error" : null} value={Cgpa} onChange={this.changeHandler} />
                            {(formErrors.Cgpa.length > 0) && (
                                <span className="errorMessage">{formErrors.Cgpa}</span>
                            )}
                        </div>

                        <div className="WorkExperience">
                            <label for="WorkExperience">Work Experience</label>
                            <input type="text" name="WorkExperience" id="WorkExperience" value={WorkExperience} onChange={this.changeHandler} />
                        </div>

                        <div className="College">
                            <label for="College">College</label>
                            <input type="text" name="College" id="College" value={College} onChange={this.changeHandler} />
                        </div>
                        <div className="createAccount">
                            <button type="submit">Create Account</button>
                            <small>Already Have Account?  <Link to="/login">Sign In</Link></small>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Register