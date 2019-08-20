import React from 'react';

const orderSummary = props => {
    const summary = (
        Object.keys(props.ingredients)
        .map( ( igkey, i ) => (
                <li key={ igkey +i }>{igkey + " : " + props.ingredients[igkey]}</li>
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

            <button>Check Out</button>
            <button>Cancel</button>
        </>
    );
};

export default orderSummary;