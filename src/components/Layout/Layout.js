import React from 'react';

import CSS from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props =>(
    <>
        <Toolbar/>
        <main className={CSS.Content}>
            {props.children}
        </main>
    </>
);

export default layout;