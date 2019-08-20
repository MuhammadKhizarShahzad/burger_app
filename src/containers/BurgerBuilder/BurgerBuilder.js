import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        totalPrice: 20,
        purchasable: false
    };

    updatePurchaseState(ingredients){
        const sum = (
            Object.keys(ingredients)
            .map( igkey => ingredients[igkey] )
            .reduce( ( s, c ) => s+c , 0 )
        );
        this.setState( ( prevState, props )  => prevState.purchasable = sum > 0 );
    }

    addIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] + 1;
        const copyIngredients = { ...this.state.ingredients };
        copyIngredients[type] = updatedCount;

        const UpdatePrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ingredients: copyIngredients, totalPrice: UpdatePrice});
        this.updatePurchaseState( copyIngredients );
    };


    removeIngredientHandler = (type) =>{
        if(this.state.ingredients[type] === 0){
            return 0;
        }
        const updatedCount = this.state.ingredients[type] - 1;
        const copyIngredients = { ...this.state.ingredients };
        copyIngredients[type] = updatedCount;

        const UpdatePrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState((prevState, props)=>{
            return(
                prevState.ingredients = copyIngredients, 
                prevState.totalPrice = UpdatePrice
            )
        });
        this.updatePurchaseState( copyIngredients );
    };

    render(){
        const disabledInfo = { ...this.state.ingredients };
        return (
            <>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients = { this.state.ingredients }/>
                <BuidControls
                    pruchase = { this.state.purchasable }
                    totalPrice = { this.state.totalPrice }
                    disabledInfo={ disabledInfo }
                    AddIngredient={ this.addIngredientHandler }
                    removeIngredient={ this.removeIngredientHandler }/>
            </>
        );
    }
}

export default BurgerBuilder;