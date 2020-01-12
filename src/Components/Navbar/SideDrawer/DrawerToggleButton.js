import React from 'react';

function DrawerToggleButton(props){
    return (<div>
         <button className="navbar-toggler navbar-light" type="button" data-toggle data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={props.click}>
                        <span className="navbar-toggler-icon navbar-light"></span>
                    </button> 
    </div>)
}
export default DrawerToggleButton