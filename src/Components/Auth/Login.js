import React from 'react'

var mystyle={
    backgroundColor: 'white',
    maxWidth: '500px',
    marginTop: '10%',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px black'
}

export default function Login(props){
    return(
       <div className='container' style={mystyle}>
             {console.log(props.match.params.type)}
       
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                 <button type="submit" class="btn btn-primary col" style={{backgroundColor:'#519e8a'}}>Submit</button>
            </div>

    )
  
    
}