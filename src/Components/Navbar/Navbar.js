import React, { Component, useContext } from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'; import Badge from '@material-ui/core/Badge';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';
import { AuthContext } from '../../Context/AuthContext.js'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';

export default function Navbar(props) {
    const [authState, setauthState] = useContext(AuthContext)
    let Felement = <IconButton component={Link} to="/" linkButton={true} >
        <HomeSharpIcon style={{ color: "white" }} />
    </IconButton>;
    let Selement = (authState.LoggedIn && authState.Type !== "Visitor") && <IconButton component={Link} to="/Profile" linkButton={true} >
        <AccountCircleSharpIcon style={{ color: "white" }} />
    </IconButton>;  
    let SelenetNotLogged = (!authState.LoggedIn) && (<Link className="nav-link text-white ml-5" to='/Register'>Register</Link>);
    let Telement = (authState.LoggedIn) ? (<IconButton onClick={()=>authState.logout()}><ExitToAppSharpIcon style={{color :"white"}}/></IconButton>) : (<Link className="nav-link text-white ml-5" to='/login'>Login</Link>);
    switch (authState.Type) {

        case "Visitor":
            SelenetNotLogged = <Link className="nav-link text-white ml-5" to='/Register'>Register</Link>

            break;
        case 'College':
            Selement = (<div className="dropdown">
                <IconButton type="button" id="dropdownMenuButton" color="inherit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Badge badgeContent={19} color="secondary">
                        <NotificationsNoneSharpIcon style={{ color: "white" }} />
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
                        <NotificationsNoneSharpIcon style={{ color: "white" }} />
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
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgba(12, 99, 150)" }}>
                <DrawerToggleButton click={props.drawerClickHandler}></DrawerToggleButton>
                <a className="navbar-brand text-white" href="#"><FontAwesomeIcon icon={faAcquisitionsIncorporated} size="lg"></FontAwesomeIcon><strong> Alumni Network</strong></a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            {Felement}
                        </li>
                        <li className="nav-item">
                            {Selement}
                        </li>
                    </ul>
                    <div className="justify-content-end">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                {SelenetNotLogged}
                            </li>
                            <li className="nav-item">
                                {Telement}
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}
