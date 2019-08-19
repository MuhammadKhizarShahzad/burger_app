import React from 'react';

import Burger from '../../components/Burger/Burger';
import BuidControls from '../../components/Burger/BuildContorls/BuildControls';

class BurgerBuilder extends React.Component{

    state = {
        ingredients :{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0 
        }
    }
    render(){
        return (
            <>
                <Burger ingredients = {this.state.ingredients}/>
                <BuidControls/>
            </>
        );
    }
}

export default BurgerBuilder;