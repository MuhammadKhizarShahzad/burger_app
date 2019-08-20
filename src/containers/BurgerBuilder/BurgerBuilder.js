import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

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
        purchasable: false,
        modalShow: false
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

    modalShowHandler= () => this.setState({modalShow: true});

    purchaseCancelHandler = () => this.setState({modalShow: false});

    purchaseContinueHandler = () => alert("This Module Will Add SOON!!!");

    componentDidUpdate(){
        // console.log("Modal Show :",this.state.modalShow);
    }

    render(){
        const disabledInfo = { ...this.state.ingredients };
        // let modal=null;
        // if(this.state.modalShow){
        //     modal=(
        //         <Modal show = { this.state.modalShow }>
        //             <OrderSummary ingredients={this.state.ingredients}/>
        //         </Modal>
        //     );
        // }
        return (
            <>
                <Modal show = { this.state.modalShow } >
                    <OrderSummary 
                        totalPrice={ this.state.totalPrice }
                        pucrchaseCancel={this.purchaseCancelHandler}
                        PurchaseContinue={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients}/>
                </Modal>
                <Backdrop 
                    pucrchaseCancel={this.purchaseCancelHandler}
                    show={this.state.modalShow}/>
                <Burger ingredients = { this.state.ingredients }/>
                <BuidControls
                    modalShow={this.modalShowHandler}
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