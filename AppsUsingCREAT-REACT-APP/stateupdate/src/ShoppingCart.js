import React, { Component } from 'react';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            total: this.props.items.length,
        }
    }

    render() {
        setTimeout(() => {
            this.setState({
                items: this.state.items + ", Dell-laptop",
            })
        }, 3000);
        return (
            <>
                <h1> Your Cart Details</h1>
                <h2>Product Details : {this.state.items}</h2>
                <h2>Product Counting : {this.state.total}</h2>
            </>
        );
    }
}
export default ShoppingCart;