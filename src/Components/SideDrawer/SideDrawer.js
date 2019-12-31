import React from 'react'
import './SideDrawer.css'
const sideDrawer = props => {
    let drawerClasses = 'side-drawer'
    if(props.show){
        drawerClasses = 'side-drawer open'
    }
    return (
    <nav className={drawerClasses}>
        <span className="navbar-brand"><strong>Alumni Network</strong></span>
        <ul>    
            <li><a href="/">Home</a></li>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Register</a></li>
        </ul>
    </nav>)
}
export default sideDrawer