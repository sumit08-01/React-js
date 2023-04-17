import React, { Component } from 'react';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
        }

    }
    render() {
        return (
            <>
                <h1>Available Prodect</h1>
                {this.props.product.map((m) =>
                    <span>
                        <span>{m}</span>
                        <button>Delete</button><br />
                    </span>
                )
                }

            </>
        );
    }
}
export default ProductList;