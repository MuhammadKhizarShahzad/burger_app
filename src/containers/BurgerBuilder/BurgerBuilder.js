import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildContorls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 10,
    cheese: 20,
    meat: 30 
};

class BurgerBuilder extends React.Component{

    state = {
        ingredients :{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0 
        },
        totalPrice: 20
    };

    componentDidUpdate(){
        console.log("TotalPrice:", this.state.totalPrice)
    }

    addIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        const copyIngredients = { ...this.state.ingredients }
        copyIngredients[type] = updatedCount;

        const UpdatePrice = this.state.totalPrice + INGREDIENT_PRICES[type]

        this.setState(( prevState, props )=>{
            return(prevState.ingredients = copyIngredients, prevState.totalPrice = UpdatePrice)
        });
    };


    removeIngredientHandler = (type) =>{
    const updatedCount = this.state.ingredients[type] - 1;
        const copyIngredients = { ...this.state.ingredients }
        copyIngredients[type] = updatedCount;

        const UpdatePrice = this.state.totalPrice - INGREDIENT_PRICES[type]

        this.setState({ingredients: copyIngredients, totalPrice: UpdatePrice});
    };


    
    render(){
        return (
            <>
                <Burger ingredients = {this.state.ingredients}/>
                <BuidControls
                    AddIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}/>
            </>
        );
    }
}

export default BurgerBuilder;