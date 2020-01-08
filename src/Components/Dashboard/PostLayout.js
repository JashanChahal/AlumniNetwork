import React,{useState} from 'react'

export default function Post(props){
    
    const [postLocal,setPostLocal]=useState(
      { likes: 0,
        id: props.id,
        title: props.title,
        body: props.body
      }
   )

   function setLikes(){
     setPostLocal({...postLocal,likes:postLocal.likes+1})
   }
    
    return (
    < >
    
       <div class="card my-4" >
       <div class="card-body">
          <h5 class="card-title">{postLocal.title}</h5>
          <p class="card-text">{postLocal.body}</p>
          <a href="dsf" class="btn btn-primary">Go somewhere</a>
          <p>Likes: {postLocal.likes}</p>
          <button onClick={setLikes}>Like</button>
        </div>
      </div> 
    </>)
}