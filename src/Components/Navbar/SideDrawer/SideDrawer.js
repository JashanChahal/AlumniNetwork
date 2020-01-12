import React,{ useContext } from 'react'
import './SideDrawer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons'
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'; import Badge from '@material-ui/core/Badge';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { AuthContext } from '../../../Context/AuthContext'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
function SideDrawer(props) {
    const [authState, setauthState] = useContext(AuthContext)
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    let Felement = <IconButton component={Link} to="/" linkButton={true} >
        <HomeSharpIcon  /> 
    </IconButton>;
    let Selement = (authState.LoggedIn && authState.Type !== "Visitor") && <IconButton component={Link} to="/Profile" linkButton={true} >
        <AccountCircleSharpIcon  />
    </IconButton>;
    let SelenetNotLogged = (!authState.LoggedIn) && (<Link className="nav-link text-white" to='/Register'>Register</Link>);
    let Telement = (authState.LoggedIn) ? (<IconButton onClick={()=>authState.logout()}><ExitToAppSharpIcon /></IconButton>) : (<Link  to='/login'>Login</Link>);
    switch (authState.Type) {

        case "Visitor":
            SelenetNotLogged = <Link  to='/Register'>Register</Link>
            break;
        case 'College':
            Selement = (<div className="dropdown">
                <IconButton type="button" id="dropdownMenuButton" color="inherit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Badge badgeContent={19} color="secondary">
                        <NotificationsNoneSharpIcon  />
                    </Badge>
                </IconButton>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>)
            break;
        case "Directorate":
            Selement = <div className="dropdown">
                <IconButton type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Badge badgeContent={19} color="secondary">
                        <NotificationsNoneSharpIcon  />
                    </Badge>
                </IconButton>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            break;
        default:
            break;
    }
    
    return (
    <nav className={drawerClasses}>
        <span className="navbar-brand"><FontAwesomeIcon icon={faAcquisitionsIncorporated} size="2x"></FontAwesomeIcon></span>
        <div className="container ml-95">
        <ul>    
            <li >{Felement}</li>
            <li>{Selement}
            {SelenetNotLogged}</li>
            <li>{Telement}</li>
        </ul>
        </div>
    </nav>)
}
export default SideDrawer