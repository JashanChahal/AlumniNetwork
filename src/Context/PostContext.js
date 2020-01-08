import React,{createContext,useState} from 'react'

export const PostContext = createContext()

export const PostProvider=(props)=>{
    const [On,setOn] =useState(false)
    return(
        <PostContext.Provider value={[On,setOn]}>
            {props.children}
        </PostContext.Provider>
    )
}