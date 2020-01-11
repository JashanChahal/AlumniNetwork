import React,{useState,useContext,useEffect} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Dashboard.css'
import PostsShow from './PostsShow'
import 'react-tabs/style/react-tabs.css'
import Profile from './Profile'
import { AuthContext } from '../../Context/AuthContext.js';
import DefaultHome from './DefaultHome'


export default function Dashboard() {
  
   const [authState,setAuthState]= useContext(AuthContext)

 if( authState.LoggedIn === true  )
    return <DefaultHome/>
  else
    return (
        <div>
         


        
         <Tabs>
    <TabList >
      <Tab >Events</Tab> 
      <Tab>Profile</Tab>
      <Tab>Group Chat</Tab>
    </TabList>


    <TabPanel>
      <PostsShow/>
    </TabPanel>
    <TabPanel>
      <Profile/>
    </TabPanel>
    <TabPanel>
        <h2>Group Chat</h2>
    </TabPanel>
  </Tabs>





        {/* <div style={myStyle}>
            fdsgfs
        </div> */}
        
       
        </div>
    
    )
}


