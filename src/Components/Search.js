import React,{useEffect,useState,useContext} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {colleges,branches} from '../Options'
import {AppBar ,Toolbar,TextField,Button ,Input  } from '@material-ui/core';
import axios from 'axios'
import {AuthContext} from '../Context/AuthContext'
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

export default function Search()
{
    const [search,setSearch] = usePersistedState('searchData',{
        College: '',
        Branch: '',
        Year: ''
    })

    const [users,changeUsers]=useState([])
    
    const [auth,setAuth] = useContext(AuthContext)
    function handleSubmit(e){
            e.preventDefault()
            console.log('hey we are submitting')
            if(search.year>2020)
                console.log('enter a valid year')
            else
            {
                axios.post('/filter_users',search)
                .then(res=> {console.log(res); changeUsers(res);})
                .catch(err=> console.log(err))
            }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <AppBar color='default'  position='sticky'>
        <Toolbar>
        <div className="container-fluid ">
                    <div className="row align-items-center">
                    {
                         (auth.Type == 'College')  && 
                            <Autocomplete
                            className="col-md-3"
                            defaultValue={search.College} 
                            onInputChange={(event,value)=>setSearch({...search,College:value}) }
                            options={colleges.map(option => option.name)}
                            renderInput={params => (
                            <TextField {...params} label="College" margin="dense" size='medium' variant="standard" fullWidth={true} />
                            )}
                            />
                    }

                    <Autocomplete
                        className="col-md-3"
                        defaultValue={search.Branch} 
                        onInputChange={(event,value)=>setSearch({...search,Branch:value}) }
                        options={branches.map(option => option.name)}
                        renderInput={params => (
                        <TextField {...params}  label="Branch" margin="dense" size='medium' variant="standard" fullWidth={true} />
                        )}
                    />

                    <TextField   onChange={(e)=>setSearch({...search,Year:e.target.value})} defaultValue={search.Year || "Year"} label="Year" className="col-md-3" margin={'none'} type="number" inputProps={ {min:'1980',max: new Date().getFullYear() } } size='medium'  variant="standard" fullWidth={true}/>
                    
                    <Button  type='submit' className="col-md-1"  color={'primary'} variant={'contained'} fullWidth={true}>Search</Button>
                    </div>
            </div>
        </Toolbar>
        </AppBar>
        
            {/* <Toolbar color='primary'/> */}
        </form>
        <div className='container'>
               {  
                   users.map(user=> <Display />)   
                }
        </div>
        </div>
    )
}   
    
function Display(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
        </div>
    )
}