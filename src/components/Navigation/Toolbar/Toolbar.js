import React from 'react';

import CSS from './Toolbar.module.css';
import BurgerLogo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => {
    return (
        <header className={CSS.Toolbar}>
            <div>Menu</div>
            <BurgerLogo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default toolbar;