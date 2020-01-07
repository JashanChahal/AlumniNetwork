import React, { Component } from 'react'
import Navbar from './Navbar.js';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
class Navbarhandler extends Component {
    state = {
        sideDrawerOpen: false
    }
    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            }
        })

    }
    backDropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    }
    render() {
        let Back;
        if (this.state.sideDrawerOpen) {
            Back = <Backdrop backdrophandler={this.backDropClickHandler} />
        }
        return (
            <div>
                <Navbar drawerClickHandler={this.drawerToggleHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {Back}

            </div>
        )
    }
}

export default Navbarhandler
