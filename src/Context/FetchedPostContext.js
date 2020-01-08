import React,{createContext,useState} from 'react';


export const FetchedPostContext = createContext();

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = useState({
        Id:'',
        Author:'',
        Image:'',
        likes: 0
    })
    return (
      <FetchedPostContext.Provider value={[authValue,setauthValue]}>
          {props.children}
      </FetchedPostContext.Provider>  
    );
}