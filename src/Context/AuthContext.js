import React,{createContext,useState} from 'react';
export const AuthContext = createContext();

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = useState({
        _id:'',
        Name:'',
        Email:'',
        Cgpa: '',
        Year: '',
        Branch: '',
        College: '',
        LoggedIn:false,
        Type:'Visitor',
        WorkExperience: '',
        tokens: [],

        logout : ()=>{
            // localStorage.setItem('login',false)
            setauthValue({ ...authValue,       
            _id:'',
            Name:'',
            Email:'',
            Type:'Visitor',
            LoggedIn:false,})
        }
    })
    return (
      <AuthContext.Provider value={[authValue,setauthValue]}>
          {props.children}
      </AuthContext.Provider>  
    );
}