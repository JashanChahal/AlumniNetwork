import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'

import PostForm from './PostForm.js'
import PostLayout from './PostLayout'
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PostContext } from '../../Context/PostContext.js';
import { AuthContext } from '../../Context/AuthContext.js';


export default function PostsShow(){
    
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true);
    const [authState,changeAuthState]=useContext(AuthContext);
    const [On,setOn] = useContext(PostContext)
    var myStyle={
        padding: '20px',
        border: '1px solid grey'
    }
     
    function provider(){
        var arr=[]
        for(var i=0;i<3;i++)
            arr.push(<PostLayout loading={loading}/>)
        return arr;
    }


    // useEffect(() => {
    //     console.log("we are fetching data")
    //     axios.post("http://192.168.137.191:8080/posts/get_post_by_college",{
    //         College: 'NIT Jalandhar'
    //     })
    //       .then(response => console.log(response))
    //       .catch(err=> console.log('error') )
    //   }, []);

    function download(){
        console.log("we are in download section")
           axios.post('http://192.168.137.191:8080/posts/get_post_by_college',{
              College: authState.College
          })   //'https://uinames.com/api/?ext&&amount=10');
          .then(result=>{console.log("result :")
          console.log(result)
          setLoading(false)
          setData(result.data);
        })
        .catch(err=>console.log("we have error"))

        console.log("we are out of this shit")
    }

    { loading && download() } 
    return(
    <div className="container mt-4">

                <div className="row justify-content-around">
                    <div className="col-md-8">
                            <div style={myStyle}>
                                <FontAwesomeIcon icon={faEdit} size="lg" style={{padding: '5px'}}></FontAwesomeIcon>
                                <button className="postButton" type="submit" onClick={()=> setOn(!On)} >Write something Here</button>
                                <PostForm/>
                            </div> 

              { loading ? provider() : 
                data.map(item=>{
                console.log('its the time')
                {/* return <PostLayout loading={loading}  photo={item.PostImage}/> */}
                return <PostLayout loading={loading} name={item.Name} content={item.Content} date={item.Date} photo={item.postImage} likes={item.NoOfLikes} comments={item.NoOfComments} postId={item._id}/>
                    {/* return <div> GOT THE DATA</div> */}
                    })
            }
            
              
                    </div>
    
            </div>

        </div>
)
}