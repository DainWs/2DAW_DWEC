import React from 'react';
import { StorageManagerInstance } from '../../services/StorageManager';

var instance;

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
        this.state = { imageUrl: '/assets/images/loading.gif' };

        instance = this;
        StorageManagerInstance.getProductImageURL(this.product.id, function(url) {
            instance.setState({
                imageUrl: url
            });
        });
    }

    onClick() {
        console.log(`You clicked on ${this.product.getName()} product.`);
    }

    render() {
        return (
            <a href="single-product.html">
                <div className="featured-item">
                    <img src={this.state.imageUrl} alt={this.product.getName()}/>
                    <h4>{this.product.getName()}</h4>
                    <h6>{this.product.getPrice()}</h6>
                </div>
            </a>
        );
    }
}

export { ProductComponent }