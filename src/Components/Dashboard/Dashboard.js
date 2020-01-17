import React, {useContext} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Dashboard.css'
import PostsShow from './PostsShow'
import 'react-tabs/style/react-tabs.css'
import Profile from './Profile'
import { AuthContext } from '../../Context/AuthContext.js';
import DefaultHome from './DefaultHome'
import SidePanel from './SidePanel.js'

export default function Dashboard() {
  
   const [authState,setAuthState]= useContext(AuthContext)
  
   console.log("on Dashboard")
   console.log(authState)
   return (
        <div>
            <Tabs>
                <TabList >
                    <Tab >Events</Tab>
                    <Tab>Profile</Tab>
                    <Tab>Group Chat</Tab>
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
            </Tabs>

        </div>

    )
}


