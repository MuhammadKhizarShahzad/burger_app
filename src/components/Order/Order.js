import React from 'react';

import CSS from './Order.module.css';
const order = (props) => {
    const ingredients = [];

// Alternative
    // Object.keys(props.ingredients)
    // .map(igKey => ingredients.push(igKey +" : "+ props.ingredients[igKey]+" "))

// Alternative
    // let key = null;
    // for(key in props.ingredients){
    //     ingredients.push(key +" : "+ props.ingredients[key]+" ")
    //     // console.log(key);
    // }
    
// Alternative

    let key = null;
    for(key in props.ingredients){
        ingredients.push({
            name: key,
            amount: props.ingredients[key]
        })
    }
    const ingredientsOutput=(
        ingredients.map( ing => (
            <span 
                key={ing.name} 
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 5px',
                    border: '1px solid #ccc',
                    padding: '5px'
                }}>
                {ing.name} :{ing.amount} 
            </span>
        ))
    );
    
    return (
        <div className={CSS.Order}>
            <p>Ingredients : {ingredientsOutput} </p>
            <p>Total Price : <strong>PKR {props.price}</strong></p>
        </div>
    );
};

export default order;