import React from 'react';

import CSS from './ToggleSideDrawer.module.css';

const toggleSideDrawer = (props) =>  (
    <div onClick={props.clicked} className={CSS.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div> 
    </div>
);

export default toggleSideDrawer;