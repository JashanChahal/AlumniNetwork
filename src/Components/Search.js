import React,{useEffect,useState,useContext} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {colleges,branches} from '../Options'
import {AppBar ,Toolbar,TextField,Button ,Input  } from '@material-ui/core';
import axios from 'axios'
import {AuthContext} from '../Context/AuthContext'
import Avatar from '@material-ui/core/Avatar';



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
            axios.post('/filter_users',search)
            .then(res=> { res.data=res.data.map(item=>({...item,isSelected:false}));  changeUsers(res.data);  })
            .catch(err=> console.log(err))
    }

    

    function changeChecked(id){
      console.log('here we are')
      const newUsers=[...users]
        newUsers[id].isSelected=!newUsers[id].isSelected;
        changeUsers(newUsers);
    }
    
    function selectAll(e)
    {
      console.log(e.target.checked)

      console.log('selecting all')
      // const newUsers=[...users]
      const status=e.target.checked ? true : false;
      const newUsers=[...users].map(user=>({...user,isSelected:status}))
      changeUsers(newUsers)
    }

    console.log('seems we need to get updated');
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <AppBar color='inherit'  position='sticky' style={{zIndex:0}}>
        <Toolbar>
        <div className="container-fluid ">
                    <div className="row align-items-center">
                    {
                         (auth.Type == 'Directorate')  && 
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
        
        </form>

        <div className="m-3 d-flex justify-content-between">
        
        <span className="heading2"><input type="checkbox" onChange={selectAll}/> SELECT ALL </span>
        <a href={"mailto:"+ users.map(user=> user.isSelected ? user.Email : '')} > <button type="button" class="btn btn-success" >SendMail</button></a>
        </div>

             { console.log(users) }           
        <div  class="accordion" id="accordionExample">
             
               {   
                
                   users.map((user,idx)=> <Display id={idx} name={user.Name} email={user.Email}  college={user.College}
                       year={user.Year} cgpa={user.Cgpa} workExperience={user.WorkExperience} checked={user.isSelected}
                       changeChecked={changeChecked}
                   />)   
                }
        </div>
        </div>
    )
}   

function Display(props){
    return(
        <div class="card">
        <input type="checkbox"  checked={props.checked} onClick={()=>{props.changeChecked(props.id);}}/>
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target={'#collapse'+props.id} aria-expanded="true" aria-controls={'collapse'+props.id}>
          <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
            <p>Name: {props.name}</p>
        </button>
      </h2>
    </div>

    <div className='d-flex justify-content-between' id={'collapse'+props.id} class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body ">
      <p>Email: {props.email}</p>
        <p>Passing year: {props.year}</p>
        <p>College: {props.college}</p>
        <p>Cgpa: {props.cgpa}</p>
        <p>Year: {props.year}</p>
        <a href={"mailto:"+props.email}><button  type="button" class="btn btn-success">Send Mail</button> </a> 
      </div>
     
    </div>
  </div>
    )
}