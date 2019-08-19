import React from 'react';

import CSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildContorls = props => (
    <div className={CSS.BuildControls}>
        {controls.map(ctr => (
            <BuildControl  
                AddIngredient={()=> props.AddIngredient(ctr.type)}
                removeIngredient={() => props.removeIngredient(ctr.type)}
                key={ctr.label} label={ctr.label}/>
        ))}
    </div>
);

export default buildContorls;