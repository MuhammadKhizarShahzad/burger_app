import React from 'react';

import CSS from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient/BurgerIngredient';

const burger = props => {
    
    let transformedIngredients = (
        Object.keys(props.ingredients).filter( i => props.ingredients[i] >=0 )
        .map( igkey => [...Array(props.ingredients[igkey])]
            .map( (_,i) => <BurgerIngredient key={igkey + i} type={igkey}/> )
            ).reduce( ( arr ,v ) => arr.concat(v), [] )
    );

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start! Adding Ingredients</p>
    }
    
    return(
        <div className={CSS.Burger} style={{height: props.height}}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;