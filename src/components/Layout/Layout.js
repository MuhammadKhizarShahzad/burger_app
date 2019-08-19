import React from 'react';

import CSS from './Layout.module.css';

const layout = props =>(
    <>
        <div>Toolbar, SideDrawer and Backdrop</div>
        <main className={CSS.Content}>
            {props.children}
        </main>
    </>
);

export default layout;