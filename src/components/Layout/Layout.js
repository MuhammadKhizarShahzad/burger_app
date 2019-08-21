import React from 'react';

import CSS from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props =>(
    <>
        <Toolbar/>
        <SideDrawer/>
        <main className={CSS.Content}>
            {props.children}
        </main>
    </>
);

export default layout;