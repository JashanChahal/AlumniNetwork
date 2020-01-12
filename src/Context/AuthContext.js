import React,{createContext,useState} from 'react';
export const AuthContext = createContext();

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = useState({
        _id:'',
        Name:'Jashan',
        Email:'Chahaljashan123@gmail.com',
        Cgpa: 8.39,
        Year: '2017',
        Branch: 'CSE',
        College: 'NIT Jalandhar',
        LoggedIn:false,
        Type:'visitor',
        Experience: '',
        tokens: [],
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