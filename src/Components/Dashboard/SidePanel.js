import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import RegistrationReq from './RegistrationReq'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import IconButton from '@material-ui/core/IconButton';
class SidePanel extends React.Component {
  //  const [Notifications,setNotifications] = useState([{}]);
  constructor(props) {
    super(props);
    this.state = {
      Notifications: []
    }

  }
  componentDidMount() {
    //  Socket code
    var socket = io('http://10.42.0.97:8080/', { transport: ['websocket'] });


    socket.on("notification", data => {
       console.log(data)
       if(data.data!==null)
      {let newlist = [data].concat(this.state.Notifications)
        console.log(newlist)
       this.setState({
           Notifications : newlist
        });
       console.log(this.state.Notifications)
    }
  });
}
  //   let data = { data: "Jashan" }
  //   if (data.data !== null) {
  //     let newlist = [data].concat(this.state.Notifications)
  //     console.log(newlist)
  //     this.setState({
  //       Notifications: newlist
  //     });
  //   }
  // }


  render() {


    return (

      <div className="container">
        <strong>Registration Requests</strong>
        <ul className="list-group">
          {this.state.Notifications.map((notify) => {

            return (<React.Fragment>
              <li className="list-group-item">{notify.data} has requested to register

              <IconButton component={Link} to={"Verify/" + notify.id}><VisibilityRoundedIcon />
                </IconButton>
              </li>



            </React.Fragment>)
          })}
        </ul>

      </div>

    )


  }
}
export default SidePanel