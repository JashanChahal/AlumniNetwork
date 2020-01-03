import React, { Component } from 'react'
import axios from 'axios'
import { EEXIST } from 'constants'
class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName : '',
            userPass : '',
            
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault() 
       console.log(this.state)
        axios.post('/add',this.state)
        .then(response=>{
            console.log(response)
        })  
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        const {userName,userPass}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userName" value={userName} onChange={this.changeHandler}></input>
                    </div>
                        <div>
                        <input type="password" name="userPass" value={userPass} onChange={this.changeHandler}></input>
                        </div>
                        <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostList
