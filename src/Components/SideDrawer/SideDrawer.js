import React from 'react'
import './SideDrawer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    
    return (
    <nav className={drawerClasses}>
        <span className="navbar-brand"><FontAwesomeIcon icon={faAcquisitionsIncorporated} size="2x"></FontAwesomeIcon></span>
        <ul>    
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Register</a></li>
        </ul>
    </nav>)
}
export default sideDrawer