import React, { Component } from 'react'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons'
class Navbar extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#0C6396"}}>
            <DrawerToggleButton click={this.props.drawerClickHandler}></DrawerToggleButton>
                <a class="navbar-brand text-white" href="#"><FontAwesomeIcon icon={faAcquisitionsIncorporated} size="lg"></FontAwesomeIcon><strong> Alumni Network</strong></a>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-white ml-5" href="#">Home <i class="fas fa-home "></i> <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white ml-5" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white ml-5" href="#" tabindex="-1" aria-disabled="true">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}
export default Navbar