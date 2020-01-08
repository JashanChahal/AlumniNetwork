import React,{useState,useContext,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import PostForm from './PostForm.js'
import PostLayout from './PostLayout'
import './Dashboard.css'
import axios from 'axios'
import { PostContext } from '../../Context/PostContext.js';

export default function Dashboard() {
    const [data,updateData]=useState([])
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://jsonplaceholder.typicode.com/posts',
          );
          console.log(result.data)
          updateData(result.data);
        };
        fetchData();
      }, []);

    const [On,setOn] = useContext(PostContext)
    var myStyle={
        padding: '20px',
        border: '1px solid grey'
    }
    return (
        <div>
         
        {/* <div style={myStyle}>
            fdsgfs
        </div> */}
        
        <div className="container mt-4">

            <div className="row">
                <div className="col-md-2 col-12 ">
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
                        {/* <div style={myStyle}>
                            <FontAwesomeIcon icon={faEdit} size="lg" style={{padding: '5px'}}></FontAwesomeIcon>
                            <button className="postButton" type="submit" onClick={()=> setOn(!On)} >Write something Here</button>
                            <PostForm />
                         </div>  */}

                {
                    data.map(item=> <PostLayout
                        id={item.id}      title= {item.title}  body={item.body} 
                    />)
                }
                </div>
                
            </div>

        </div>
        </div>
    
    )
}


