import React from 'react';

import CSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const buildContorls = props => (
    <div className={CSS.BuildControls}>
        <BuildControl/>
        <BuildControl/>
        <BuildControl/>
    </div>
);

export default buildContorls;