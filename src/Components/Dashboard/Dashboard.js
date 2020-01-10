import React,{useState,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm.js'
import PostLayout from './PostLayout'
import './Dashboard.css'
import axios from 'axios'
import { PostContext } from '../../Context/PostContext.js';
import io from 'socket.io-client';


var socket = io('http://localhost:8080', { transport: ['websocket'] });

socket.on('notification', (res) => {
    console.log(res);
})

export default function Dashboard() {
    const [data,updateData]=useState({})
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.post(
            'http://192.168.137.191:8080/posts/get_post_by_user', {
                    Id: '5e1767efd1b6da53d8f42fd9'
            }
          );
          console.log('Result: ')
          console.log(result)
          updateData(result);
        };
        fetchData();
      }, []);

    const [On,setOn] = useContext(PostContext)
    var myStyle={
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
                <div className="col-md-2 col-12 ">

                <div id="list-example" className="list-group">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                </div>
                    <div className="bg-primary">
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
                </div>

                <div className="col-md-8">
                         <div style={myStyle}>
                            <FontAwesomeIcon icon={faEdit} size="lg" style={{padding: '5px'}}></FontAwesomeIcon>
                            <button className="postButton" type="submit" onClick={()=> setOn(!On)} >Write something Here</button>
                            <PostForm />
                        </div>

                        <PostLayout />
                    </div>

                {/* {
                    data.map(item=>  */}
                    <PostLayout
                        image={data}
                        // id={item.id}      title= {item.title}  body={item.body} 
                    />
                        {/* ) */}
                {/* // } */}
                </div>

            </div>
        </div>

    )
}


