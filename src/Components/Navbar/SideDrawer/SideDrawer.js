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
    let Felement = <Link className="nav-link" to='/Dashboard'>Home</Link>
    let Selement = (authState.LoggedIn && authState.Type !== "Visitor") && <Link className="nav-link" to='/Profile'>Profile</Link>
    let SelenetNotLogged = (!authState.LoggedIn) && (<Link className="nav-link" to='/Register'>Register</Link>);
    let Telement = (authState.LoggedIn) ? (<IconButton   component={Link} to='/' onClick={()=> {setauthState({...authState,LoggedIn: false}); localStorage.clear(); } }><ExitToAppSharpIcon style={{color :"blue",marginLeft:"0px"}}/></IconButton>) : (<Link className="nav-link" to='/login'>Login</Link>);
    switch (authState.Type) {

        case "Visitor":
            SelenetNotLogged = <Link className="nav-link"  to='/Register'>Register</Link>
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