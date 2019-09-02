import React, { Component } from 'react';
import Axios from '../../Axios';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        Axios.get('./orders.json')
        .then(res => {
            const fetchOrders = [];
            let key = null;
            for(key in res.data){
                fetchOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({orders: fetchOrders, loading: false})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.loading ? <Spinner/> : (
                    this.state.orders.map( order => (
                        <Order 
                            key={order.id}
                            ingredients = {order.ingredients}
                            price={order.price} />
                    ) )
                ) }
                {/* {this.state.loading ? <Spinner/> : (
                    this.state.orders.map( data => {
                        return <Order 
                            key={data.id}
                            ingredients={data.ingredients} 
                            totalPrice={data.totalPrice} />
                    })
                )} */}
            </div>
        );
    }
}

export default withErrorHandler(Orders, Axios);