import React,{useState} from 'react'

export default function Post(props){
    
    const [postLocal,setPostLocal]=useState(
      // { likes: 0,
      //   id: props.id,
      //   title: props.title,
      //   body: props.body
      // }
      {
         Content:'',
        NoOfLikes : 0,
        NoOfComments: 0,
        Likes: [],
        imageData: props.image,
        // Comments: [],
        AuthorId: '',
        // Name: '',
        // College: '',
        // Type: '',
        // Date: '',
      }
   )

   function setLikes(){
     setPostLocal({...postLocal,imageData: props.image})
   }
    
    return (
    < >
    
       <div className="card my-4" >
       <div className="card-body">
          <h5 className="card-title">{postLocal.title}</h5>
          <p className="card-text">{postLocal.body}</p>
          <a href="dsf" className="btn btn-primary">Go somewhere</a>
          <img className="img-thumbnail" src={'data:image/png;base64,'+ props.image} alt="Red dot" />
          <p>Likes: {postLocal.NoOfLikes}</p>
          {console.log( props)}
          <button onClick={setLikes}>Like</button>
        </div>
      </div> 
    </>)
}