import React from 'react';

import CSS from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient/BurgerIngredient';

const burger = props => {
    
    let transformedIngredients = Object.keys(props.ingredients).map( igkey => {
        return [...Array(props.ingredients[igkey])].map( (_,i) => {
            // console.log('Ingredient : ' + igkey , " Ingredient Index : " + (igkey+i));
            return  <BurgerIngredient key={igkey + i} type={igkey}/>
        } )
    }).reduce( ( arr ,v ) => arr.concat(v), [] );

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start! Adding Ingredients</p>
    }
    
    return(
        <div className={CSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;