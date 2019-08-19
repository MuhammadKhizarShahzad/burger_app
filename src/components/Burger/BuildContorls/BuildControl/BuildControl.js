import React from 'react';

import CSS from './BuildControl.module.css';

const buildControl = props => {
    return (
        <div className={CSS.BuildControl}>
            <div>Show{props.lebel}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    );
};

export default buildControl;