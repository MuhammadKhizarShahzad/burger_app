import React from 'react';

import CSS from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient/BurgerIngredient';

const burger = props => {
    return(
        <div className={CSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;