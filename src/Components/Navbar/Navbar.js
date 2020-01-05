import React, { Component } from 'react';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"rgba(12, 99, 150)"}}>
            <DrawerToggleButton click={this.props.drawerClickHandler}></DrawerToggleButton>
                <a className ="navbar-brand text-white" href="#"><FontAwesomeIcon icon={faAcquisitionsIncorporated} size="lg"></FontAwesomeIcon><strong> Alumni Network</strong></a>
                
                <div className ="collapse navbar-collapse" id="navbarNav">
                    <ul className ="navbar-nav m-auto">
                        <li className ="nav-item active">
                            <Link className ="nav-link text-white ml-5" to='/'>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white ml-5" to='/login'>Login</Link>
                        </li>
                        <li className ="nav-item">
                            <Link className ="nav-link text-white ml-5" to='/register' >Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}
export default Navbar