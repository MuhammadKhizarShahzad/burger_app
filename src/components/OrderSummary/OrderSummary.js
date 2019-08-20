import React from 'react';

import Button from '../UI/Button/Button';

const orderSummary = props => {
    const summary = (
        Object.keys(props.ingredients)
        .map( ( igkey, i ) => (
                <li key={ igkey +i } >
                    <span style={{textTransform: 'capitalize'}}>
                        <b>{igkey + " : " + props.ingredients[igkey]}</b>
                    </span>
                </li>
            ) 
        )
    );

    return (
        <>
            <h3>Order Summary </h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price : { props.totalPrice.toFixed(2) }</strong></p>
            <p>Continue To Checkout?</p>
            <Button 
                className="Danger"
                clicked={props.pucrchaseCancel}>CANCEL</Button>
            <Button className="Success"
                clicked={props.PurchaseContinue}>CONTINUE</Button>
        </>
    );
};

export default orderSummary;