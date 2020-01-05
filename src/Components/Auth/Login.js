import React,{useState} from 'react'
import './login.css'


export default function Login(props){
    
    let [formState,changeState]=useState({
        userNameError:'',
        passwordError:''
    })

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    
    function handleChange(e){
        var {type,value}  = e.target;
        let nameErr='';
        switch(type)
        {
            case "email":
                 nameErr= emailRegex.test(value) && value.length > 0
                ? ""
                : "invalid email address";
                console.log(nameErr)
            break;
            default :
                console.log('error message');
        }
        console.log('input is captured')
        changeState({...formState,userNameError:nameErr})
        
    }
    return(
       <div className='container grouper' >
             {console.log(props.match.params.type)}
       
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" style= {formState.userNameError.length >0? {border : '1px solid red', boxShadow: 'none'}  : null} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                <span>{formState.userNameError}</span>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={handleChange}/>
                <span>{formState.password}</span>
              
            </div>
            
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                 <button type="submit" class="btn btn-primary col" style={{backgroundColor:'#519e8a'}}>Submit</button>
            </div>

    )
  
    
}