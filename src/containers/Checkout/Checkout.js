import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: null
    }
    componentDidMount(){
        console.log(this.props)
        const queryparam = new URLSearchParams( decodeURIComponent( this.props.location.search ) )
        let ingredients = {}
        let param = null;
        let price = null;
        console.log(queryparam.entries())
        for( param of queryparam.entries()){
            if(param[0] === "TotalPrice"){
                price = param[1];
                console.log( price );
                continue;
            }
            console.log( param );
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients, totalPrice: price});
    }

    componentWillUnmount(){
        console.log("Checkout Unmounted ", this.state.totalPrice);
    }

    render() {
        const checkoutSummary = this.state.ingredients ? (
            <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    Cancel={() => this.props.history.goBack() }
                    Continue={ ()  => this.props.history.replace(this.props.match.url + "/contact-data")}  />
        ) : <h1>go pervious Page and Add ingredients </h1>;
        return (
            <>
                {checkoutSummary}
                <Switch>
                    <Route 
                        path={this.props.match.path + '/contact-data'} 
                        render={ () => (
                            <ContactData 
                                ingredients={this.state.ingredients} 
                                totalPrice={this.state.totalPrice}/>
                            ) } 
                    />
                    {/* <Redirect from="/checkout/contact-data" to="/checkout"/> */}
                    <Route render={ () => <h1>Page Not Found</h1>}/>
                </Switch>
            </>
        );
    }
}

export default Checkout;