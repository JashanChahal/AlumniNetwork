import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm.js'
import PostLayout from './PostLayout'
import './Dashboard.css'
import { PostContext } from '../../Context/PostContext.js';
import io from 'socket.io-client';
import axios from 'axios';

var socket = io('http://localhost:8080', { transport: ['websocket'] });

socket.on('notification', (res) => {
    console.log(res);
})

export default function Dashboard() {
    const [On, setOn] = useContext(PostContext)
    var myStyle = {
        padding: '20px',
        border: '1px solid grey'
    }
    const Tempo = (e) => {
        var obj = {
            Name: 'Bhargav'
        }
        axios.post('http://localhost:8080/test', obj)
            .then((res1) => {
                console.log(res1);
                // var io = Socket();
            })
            .catch((e) => {
                console.log(e);
            });


    }
    return (
        <div>

            {/* <div style={myStyle}>
            fdsgfs
        </div> */}
            <button onClick={Tempo}>Temporary</button>
            <div className="container mt-4">

                <div className="row">
                    <div className="col-md-4 col-12 bg-primary">
                        <div>
                            Hello
                    </div>
                        <div>
                            dsialjoh
                    </div>
                        <div>
                            dsloashgo
                    </div>

                    </div>
                    {/* <div> */}
                    {/* <div style={myStyle}>
                        <div style={{flexGrow: '1'}}>
                        <FontAwesomeIcon icon={faEdit} ></FontAwesomeIcon>
                        <button onClick={()=> setOn(!On)}> Start a Post</button>
                        <PostForm status={On}/>
                        </div>
                        <div>
                            Photo
                        </div>
                    </div>
                </div> */}
                    {/* </div> */}
                    <div className="col-md-8">
                        <div style={myStyle}>
                            <FontAwesomeIcon icon={faEdit} size="lg" style={{ padding: '5px' }}></FontAwesomeIcon>
                            <button className="postButton" type="submit" onClick={() => setOn(!On)} >Write something Here</button>
                            <PostForm />
                        </div>

                        <PostLayout />
                    </div>

                </div>

            </div>
        </div>

    )
}


