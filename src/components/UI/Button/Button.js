import React from 'react';

import CSS from './Button.module.css';

const button = props => (
    <button 
        className={[CSS.Button,CSS[props.className]].join(' ')}
        onClick={props.clicked}
         >
    
        {props.children}

    </button>
);
export default button;