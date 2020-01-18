import React, { Component, useContext, useState } from 'react'
import Backdrop from '../Navbar/Backdrop/Backdrop.js'
import './PostForm.css'

import {TextField,CircularProgress} from '@material-ui/core';
import { AuthContext } from '../../Context/AuthContext.js';
import { PostContext } from '../../Context/PostContext.js';
import axios from 'axios'
const PostForm = (props) => {

    const [authState,changeAuthState]=useContext(AuthContext);
    
    const [loading, setLoading] = useState(false)
    const [PostState, setPostState] = useState(
        {
            Author: '',
            Text: '',
            Image: null
        })


    const changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const { Author, Text, Image } = PostState;
        setPostState({
            Author, Image, [name]: e.target.value
        })

    }
    const fileSelectedHandler = (e) => {
        const { name, value } = e.target;
        const { Author, Text, Image } = PostState;
        setPostState({
            Author, Text, [name]: e.target.files[0]
        })
    }
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const obj = new FormData()
        if(PostState.Image)
        {obj.append('postImage',PostState.Image,PostState.Image.name)}
        else{
            obj.append('postImage',null)
        }
        obj.append('Content',PostState.Text)
        obj.append('_id', authState._id)
        obj.append('Name', authState.Name)
        obj.append('Type',authState.Type)
        obj.append('College', authState.College)
        obj.append('Date', new Date().toLocaleDateString())
        console.log('making a post request')
        console.log(obj)
        try
        {
            setLoading(true)
        var result= await axios.post('/posts/create_post',obj)

            setOn(!On);
            setLoading(false)
            window.location.reload();

        }catch(err){      
             
            alert("something went wrong")
            setLoading(false)
        }
        
    }
    let wrapper = "postform-wrapper";
    let postwrapper = "postwrapper";
    let Back
    const [On, setOn] = useContext(PostContext)
    const backDropHandler = (e) => {
        setOn(!On)
    }
    if (On) {
        postwrapper = "postwrapper open"
        wrapper = "postform-wrapper open"
        Back = <Backdrop backdrophandler={backDropHandler} />
    }
    return (
        <React.Fragment>
            <div className={postwrapper}>
                <div className={wrapper} >
                    <h1>Create Post</h1>
                    <form onSubmit={SubmitHandler}>
                        <textarea className="form-control" name="Text" rows="5" placeholder="Enter Text Here.. " value={PostState.Text} onChange={changeHandler}></textarea>
                        <input type='file' name="Image" onChange={fileSelectedHandler} className="form-control my-2" />
                        <button type="submit" className="btn btn-primary">Post</button>
                    </form>
                </div>
                {loading && <CircularProgress size={24} style={{ position:'absolute', top: '40%',left: '45%', zIndex: '100' }}/> }
       
            </div>
            {Back}

        </React.Fragment>


    )
}
export default PostForm
