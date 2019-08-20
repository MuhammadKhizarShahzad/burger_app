import React from 'react';

import CSS from './Modal.module.css';

const modal = props => (

    <div className={CSS.Modal}>
        {props.children}
    </div>
    
);

export default modal;