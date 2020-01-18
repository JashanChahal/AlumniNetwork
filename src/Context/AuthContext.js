import React,{createContext,useState,useEffect} from 'react';
export const AuthContext = createContext();


function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
        console.log(state)
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

export const AuthProvider = (props)=>{
    const [authValue,setauthValue] = usePersistedState('auth-state',{
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