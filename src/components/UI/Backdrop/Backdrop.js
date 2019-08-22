import React from 'react';

import CSS from './Backdrop.module.css';

const backdrop = props => (
    props.show ? 
        <div 
            className={CSS.Backdrop}
            onClick={props.clicked}></div> 
    : null
)

export default backdrop;