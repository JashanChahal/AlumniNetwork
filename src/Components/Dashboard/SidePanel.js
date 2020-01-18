import React, { useState, useEffect,useContext } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import RegistrationReq from './RegistrationReq'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext'
function SidePanel() {
  const [Notifications, setNotifications] = useState([])
  const [authState, changeAuthState] = useContext(AuthContext)
  useEffect(() => {
    var socket = io('http://10.42.0.97:8080', { transport: ['websocket'] });
    console.log(authState.Name)
    socket.on(authState.Name, data => {
      console.log(data)
      if (data.data !== null) {
        let newlist = [data].concat(Notifications)
        console.log(newlist)
        // this.setState({
        //   Notifications: newlist
        // });
        setNotifications(newlist)
        console.log(Notifications)
      }
    });
    axios.post("/get_unverified_users", {
      College : authState.College
    })
      .then(users => {
        console.log(users.data)
        if (typeof users.data !== undefined) {
          let newlist = users.data.concat(Notifications)
          setNotifications( newlist );
        }
      })
  }, [])
 
  return (
    <div className="container">
      <strong>Registration Requests</strong>
      <ul className="list-group">
        {Notifications.map((notify) => {
          return (<React.Fragment>
            <li className="list-group-item">{notify.user.Name} has requested to register
              <IconButton component={Link} to={"Verify/" + notify.user._id}><VisibilityRoundedIcon />
              </IconButton>
            </li>
          </React.Fragment>)
        })}
      </ul>

    </div>

  )
}
export default SidePanel