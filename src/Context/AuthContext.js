import React,{createContext,useState} from 'react';


export const AuthContext = createContext();

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = useState({
        Profile:{ Id:'',
                Name:'',
                Email:''},
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