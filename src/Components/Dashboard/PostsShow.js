import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
    
    useEffect(()=>{
            const data=localStorage.getItem('user-data')
            if(data)
                setData(JSON.parse(data))
            // const user_auth=localStorage.getItem('user-auth')
            // if(user_auth)
            //     changeAuthState(JSON.parse(user_auth))
            
            // const loading=localStorage.getItem('loading')
            // if(loading)  
            //     setLoading(JSON.parse(loading))
    },[])
    useEffect(()=>{
        localStorage.setItem('user-data', JSON.stringify(data) )
        // localStorage.setItem('user-auth', JSON.stringify(authState) )
        localStorage.setItem('loading', JSON.stringify(loading) )
        
    })
    var myStyle={
        padding: '20px',
        border: '1px solid grey'
    }
     
    function provider(){
        var arr=[]
        for(var i=0;i<3;i++)
            arr.push(<PostLayout loading={loading} postId={i} />)
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
           axios.post('/posts/get_post_by_college',{
               _id: authState._id,
              College: authState.College
          })   //'https://uinames.com/api/?ext&&amount=10');
          .then(result=>{console.log("result :")
          setLoading(false)
          setData(result.data);
        })
        .catch(err=>console.log("we have error"))

    }

    { loading && download() } 
    if(authState.LoggenIn===false)  return <Redirect to='/' />
        else
    return(
    <div className="container mt-4">

                <div className="row justify-content-around">
                    <div className="col-md-8">
                            <div style={myStyle}>
                                <FontAwesomeIcon icon={faEdit} size="lg" style={{padding: '5px'}}></FontAwesomeIcon>
                                <button className="postButton" type="submit" onClick={()=> setOn(!On)} >Write something Here</button>
                                <PostForm />
                            </div> 

              { loading ? provider() : 
                data.map((item,idx)=>{
                return <PostLayout loading={loading} name={item[0].Name} content={item[0].Content} date={item[0].Date} photo={item[0].postImage} likes={item[0].NoOfLikes} comments={item[0].NoOfComments} postId= {idx/*item._id*/} hasLiked={item[1]}/>
                    })
            }
            
              
                    </div>
    
            </div>

        </div>
)
}