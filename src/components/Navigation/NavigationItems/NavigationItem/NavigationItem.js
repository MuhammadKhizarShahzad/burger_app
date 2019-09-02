import React from 'react';
import { NavLink } from 'react-router-dom';

import CSS from './NavigationItem.module.css';

const navigationItem = ( props ) => {
    return (
        <li className={CSS.NavigationItem}>
            <NavLink 
                exact={props.exact}
                to={{pathname: props.link}}
                activeClassName={CSS.active}
            >{props.children}</NavLink>
        </li>
    );
};

export default navigationItem;