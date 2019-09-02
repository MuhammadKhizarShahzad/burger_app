import React from 'react';

import CSS from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => {
    return (
        <ul className={CSS.NavigationItems}>
            <NavigationItem link="/" exact >Burger Builder</NavigationItem>
            <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
    );
};

export default navigationItems;