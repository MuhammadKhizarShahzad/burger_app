import React from 'react';

import CSS from './NavigationItem.module.css';

const navigationItem = ( props ) => {
    return (
        <li className={CSS.NavigationItem}><a href="/">A link</a></li>
    );
};

export default navigationItem;