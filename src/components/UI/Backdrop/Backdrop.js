import React from 'react';

import CSS from './Backdrop.module.css';

const backdrop = props => (
    props.show ? 
        <div 
            className={CSS.Backdrop}
            onClick={props.pucrchaseCancel}></div> 
    : null
)

export default backdrop;