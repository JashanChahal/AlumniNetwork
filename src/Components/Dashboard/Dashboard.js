import React,{useState} from 'react'
import PostForm from './PostForm.js'
export default function Dashboard() {
    const [On,setOn] =useState(false)
    return (
        <div>
            <button type="submit" onClick={()=> setOn(!On)} className="btn btn-primary " style={{ backgroundColor: '#519e8a', marginLeft:'50%'   }}>Post</button>
            <PostForm status={On}/>
        </div>
    )
}


