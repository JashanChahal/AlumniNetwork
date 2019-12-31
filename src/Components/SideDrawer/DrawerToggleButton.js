import React from 'react';

function DrawerToggleButton(props){
    return (<div>
         <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={props.click}>
                        <span className="navbar-toggler-icon"></span>
                    </button> 
    </div>)
}
export default DrawerToggleButton