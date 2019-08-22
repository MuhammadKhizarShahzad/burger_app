import React from 'react';

import CSS from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = ( props ) =>  {
    return(
        <>
            <div className={CSS.BackDropMobileOnly}>
                <Backdrop 
                    show={props.menu}
                    clicked={props.closeSideMenu}
                />
            </div>
            <div className={[CSS.SideDrawer,props.menu ? CSS.Open : CSS.Close].join(' ')}>
                <div className={CSS.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
};


export default sideDrawer;