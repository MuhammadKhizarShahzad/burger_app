import React from 'react';

import CSS from './BuildControl.module.css';

const buildControl = props => {
    return (
        <div className={CSS.BuildControl}>
            <div className={CSS.Label}>{props.label}</div>
            <button
                disabled={props.disabledInfo} 
                onClick={props.removeIngredient}
                className={CSS.Less} >Less</button>
            <button 
                onClick={props.AddIngredient}
                className={CSS.More} >More</button>
        </div> 
    );
};

export default buildControl;