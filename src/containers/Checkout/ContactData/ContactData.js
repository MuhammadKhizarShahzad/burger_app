import React, { Component } from 'react';
import CSS from './ContactData.module.css';
import Axios from '../../../Axios';

import Button from '../../../components/UI/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';
import FormElements from '../../../components/UI/Form/Form';
import { Redirect, withRouter } from 'react-router-dom';

class ContactData extends Component {
    state = {
        ingredients: this.props.ingredients,
        name : '',
        email: '',
        address: {
            street: '',
            country:'',
            postalCode: ''
        },
        deliveryMethod: '',
        totalPrice: this.props.totalPrice,
        modalShow: false,
        redirect: false
    }

    orderHandler = event => {
        event.preventDefault();
        this.setState({modalShow: true});
        console.log(this.state.ingredients, " price : ", this.state.totalPrice);
        const order = {
            ingredients: this.state.ingredients,
            price: +this.state.totalPrice,
            customer: {
                name: "MKS",
                address:{
                    street: " Street No. 5",
                    country: 'Pakistan',
                    zipcode: '51010',
                },
                email: 'MKS@gmail.com'
            },
            deliveryMethod: 'fastet',
        }
        Axios.post('/orders.json',order)
        .then( res => {
            this.setState( { modalShow: false, redirect: true } )

            console.log("Go beack to home",this.props);
            this.props.history.replace('/');
        } )
        .catch( err => this.setState( { modalShow: false, redirect: true } ) );
    }

    render() {
        console.log("Ingredients In contact Data  : ", this.state.ingredients, "Price : ", this.state.totalPrice);
        return (
            <div className={CSS.ContactData}>
                {/* {this.state.redirect ? < Redirect to="/" /> : null} */}
                <h2>Please Fill This Form</h2>
                <form>
                    <FormElements etype="input" label="Name" type="text" name='name' placeholder="Enter Name"/>
                    <FormElements etype="input" label="Email" type="email" name='email' placeholder="Enter Email"/>
                    <FormElements etype="input" label="Street" type="text" name='street' placeholder="Enter Street"/>
                    <select value={this.state.country} onChange={ event => this.setState({country: event.target.value})}>
                        <option value="Pakistan">Pakistan</option>
                        <option value="China">China</option>
                    </select>
                    <FormElements etype="input" label="Postal Code" type="text" name='postalCode' placeholder="Enter PostalCode"/>
                    <select value={this.state.deliveryMethod} onChange={ event => this.setState({deliveryMethod: event.target.value})}>
                        <option value="Fastest">Fastest</option>
                        <option value="Cheapest">Cheapest</option>
                    </select>
                    <div>
                        <Button className="Success" clicked={this.orderHandler}>ORDER</Button>
                    </div>
                </form>
                {this.state.modalShow ? (
                    <Modal show={this.state.modalShow}>
                        <Spinner/>
                    </Modal>) : null}
            </div>
        );
    }
}

export default withRouter(ContactData);