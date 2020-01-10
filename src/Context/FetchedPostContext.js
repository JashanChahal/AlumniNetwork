import React,{createContext,useState} from 'react';
export const FetchedPostContext = createContext();

export const FetchedPostProvider = (props)=>{
    const [postValue,setPostValue] = useState({
        // Content:'',
        // NoOfLikes : 0,
        // NoOfComments: 0,
        // Likes: 0,
        // Comments: [],
        // AuthorId: '',
        // Name: '',
        // College: '',
        // Type: '',
        // Date: '',

        likes: 0,
        title: '',
        body: '',
        increaseLikes: ()=>{
            setPostValue({...postValue, likes: postValue.likes+1})
        }
    })
    return (
      <FetchedPostContext.Provider value={[postValue,setPostValue]}>
          {props.children}
      </FetchedPostContext.Provider>  
    );
}