import React from 'react';

import CSS from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = ( props ) => {
    return (
        <div className={CSS.CheckoutSummary}>
            <h1>Delicious Burger!!!.</h1>
            <div height="300px">
                <Burger ingredients={props.ingredients} height="300px"/>   
            </div>
            <Button className="Danger" clicked = {props.Cancel } >CANCEL</Button>
            <Button className="Success" clicked = {props.Continue}>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;