import React from 'react';

import CSS from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    return (
        <ul className={CSS.NavigationItems}>
            <NavigationItem />
            <NavigationItem />
            <NavigationItem />
        </ul>
    );
};

export default navigationItems;