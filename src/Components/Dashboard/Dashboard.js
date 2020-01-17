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


export default function Dashboard() {
  
   const [authState,setAuthState]= useContext(AuthContext)
   const [tab,setTab] = usePersistedState('current-tab',0)
   function handle(){
       setAuthState({...authState,LoggedIn:!(authState.LoggedIn)})
   }
   console.log("on Dashboard")
   console.log(authState)
   return (
        <div>
             <Tabs defaultIndex={tab} onSelect={(index)=>setTab(index)}>
                <TabList >
                    <Tab >Events</Tab>
                    <Tab>Profile</Tab>
                    <Tab>Group Chat</Tab>
                    <Tab>Search</Tab>
                </TabList>
                <TabPanel>
                    <div className="row">
                    <div className="col-md-8">
                    <PostsShow />
                    </div>
                    <div className="col-md-4 border">
                    <SidePanel/>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <Profile/>
                </TabPanel>
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


