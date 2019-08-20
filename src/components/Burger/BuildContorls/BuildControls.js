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
        <p><b>Total Pirce : {props.totalPrice.toFixed(2)}</b></p>
        {controls.map(ctr => {
            props.disabledInfo[ctr.type] = props.disabledInfo[ctr.type] <= 0; 
            return <BuildControl
                disabledInfo = { props.disabledInfo[ctr.type] }
                AddIngredient={()=> props.AddIngredient(ctr.type)}
                removeIngredient={() => props.removeIngredient(ctr.type)}
                key={ctr.label} label={ctr.label}/>
        })}
        <button className={CSS.OrderButton} disabled={!props.pruchase}>ORDER NOW</button>
    </div>
);

export default buildContorls;