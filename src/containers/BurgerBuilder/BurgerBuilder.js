import React from 'react';
import Axios from '../../Axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildContorls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 10,
    cheese: 20,
    meat: 30 
};

class BurgerBuilder extends React.Component{

    state = {
        ingredients :null,
        totalPrice: 20,
        purchasable: false,
        modalShow: false,
        loading: false,
        ingerr: false
    };

    componentDidMount(){
        this.setState({loading: true});
        Axios.get('/ingredients.json')
        .then(res => {
            this.setState({ingredients: res.data, loading: false});
            this.updatePurchaseState(this.state.ingredients);
        }).catch(err => this.setState({ingerr: true}));
    }

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

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "MKS",
                address:{
                    street: " Street No. 5",
                    country: 'Pakistan',
                    zipcode: '51010',
                },
                email: 'MKS@gmail.com'
            },
            deliveryMethod: 'fastet'
        }
        Axios.post('/orders.json',order)
        .then( res => this.setState({modalShow: false, loading: false}))
        .catch(err => this.setState({modalShow: false, loading: false}));
    };

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
        
        let spinner =  <Spinner/>;
        let burger = this.state.ingerr ? (
            <h3 style={{textAlign: 'center'}}>Ingredients not Loaded</h3>
        ) : <Spinner/>;
        if(this.state.ingredients){
            burger = (
                <>
                    <Burger ingredients = { this.state.ingredients }/>
                    <BuidControls
                        modalShow={this.modalShowHandler}
                        pruchase = { this.state.purchasable }
                        totalPrice = { this.state.totalPrice }
                        disabledInfo={ disabledInfo }
                        AddIngredient={ this.addIngredientHandler }
                        removeIngredient={ this.removeIngredientHandler }/>
                </>
            )

            if(!this.state.loading){
                spinner =  <OrderSummary 
                    totalPrice={ this.state.totalPrice }
                    pucrchaseCancel={this.purchaseCancelHandler}
                    PurchaseContinue={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients}/>
            }
        }
        return (
            <>
                <Modal 
                    show = { this.state.modalShow }
                    clicked={this.purchaseCancelHandler} >
                    {spinner}
                </Modal>
                {burger}
            </>
        );
    }
}

export default withErrorHandler( BurgerBuilder , Axios );