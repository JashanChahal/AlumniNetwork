import React, {useContext,useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Dashboard.css'
import PostsShow from './PostsShow'
import 'react-tabs/style/react-tabs.css'
import Profile from './Profile'
import { AuthContext } from '../../Context/AuthContext.js';
import DefaultHome from './DefaultHome'
import Search from '../Search'
import SidePanel from './SidePanel'
import './style.css'
import Login from '../Auth/Login'
function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      () => JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }


export default function Dashboard() {
  
   const [authState,setAuthState]= useContext(AuthContext)
   const [tab,setTab] = usePersistedState('current-tab',0)
   function handle(){
       setAuthState({...authState,LoggedIn:!(authState.LoggedIn)})
   }

   console.log("on Dashboard")
   console.log(authState)
   let search;
   let tabPanel ;
   if(authState.Type!=="Alumni")
   {
       search = <Tab>Search</Tab>
   }
   if(authState.Type=="College"){
       tabPanel = <TabPanel>
        <div className="row">
        <div className="col-md-4 border">
        <SidePanel/>
        </div>
        <div className="col-md-8">
        <PostsShow />
        </div>
        </div>
    </TabPanel>
   }else{
       tabPanel = <TabPanel>
        <PostsShow />
       
    </TabPanel>
   }
   let profile,profpanel ;
   if(authState.Type==="Alumni"){
   profile = <Tab>Profile</Tab>
   profpanel = <TabPanel> <Profile/></TabPanel>
}
   if (!authState.LoggedIn) {
    return (
        <div>
            <h1>Please Log in to view this page</h1>
            <Login></Login>

        </div>
    )
}
 else{
   return (
        <div>
             <Tabs defaultIndex={tab} onSelect={(index)=>setTab(index)}>
                <TabList >
                    <Tab >Events</Tab>
                    {profile}
                    <Tab>Group Chat</Tab>
                    {search}
                </TabList>
                 {tabPanel}
                 {profpanel}
                <TabPanel style={{height: '90vh'}}>
                <iframe src = {"https://protected-cliffs-41219.herokuapp.com/chat.html?name=" + authState.Name +"&room=" + authState.College}  width = "100%" height = "100%">
         Sorry your browser does not support inline frames.
      </iframe>
                </TabPanel>
                <TabPanel>
                    <Search/>
                </TabPanel>
            </Tabs>

        </div>

    )
}
}

