import React,{createContext,useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = useState({
        Id:'',
        Name:'',
        Email:'',
        Cgpa: 0,
        Year: '',
        Branch: '',
        College: '',
        LoggedIn:false,
        Type:'visitor',
        logout : ()=>{
            setauthValue({ ...authValue,       
            Id:'',
            Name:'',
            Email:'',
            LoggedIn:false,})
        }
    })
    return (
      <AuthContext.Provider value={[authValue,setauthValue]}>
          {props.children}
      </AuthContext.Provider>  
    );
}