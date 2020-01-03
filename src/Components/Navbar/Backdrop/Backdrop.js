import React from 'react';
import './Backdrop.css'
const backdrop = props => (
    <div className="backdrop" onClick={props.backdrophandler }></div>
);


export default backdrop