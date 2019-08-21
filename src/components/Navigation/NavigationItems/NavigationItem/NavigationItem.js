import React from 'react';

import CSS from './NavigationItem.module.css';

const navigationItem = ( props ) => {
    return (
        <li className={CSS.NavigationItem}>
            <a 
                href={props.link} 
                className={ props.active ? CSS.active : null }
            >{props.children}</a>
        </li>
    );
};

export default navigationItem;