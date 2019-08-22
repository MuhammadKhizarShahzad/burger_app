import React from 'react';

import CSS from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleSideDrawer from './ToggleSideDrawer/ToggleSideDrawer';

const toolbar = ( props ) => {
    return (
        <header className={CSS.Toolbar}>
            <ToggleSideDrawer clicked={props.sideMenuToggle} />
            <div className={CSS.Logo}>
                <Logo/>
            </div>
            <nav className={CSS.DesktopOnly}>
                <NavigationItems/> 
            </nav>
        </header>
    );
};

export default toolbar;