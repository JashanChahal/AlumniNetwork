import React from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
function DrawerToggleButton(props){
    return (<div>
         <button className="navbar-toggler navbar-light" type="button" data-toggle data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={props.click}>
<MenuSharpIcon style={{color:"white"}}/>                    </button> 
    </div>)
}
export default DrawerToggleButton