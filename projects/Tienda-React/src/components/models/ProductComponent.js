import React from 'react';
import { StorageManagerInstance } from '../../services/StorageManager';

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
        this.state = { imageUrl: '/assets/images/loading.gif', isLoaded: false };

        //TODO solve this
        StorageManagerInstance.getProductImageURL(this.product.id, function(url) {
            instance.setState({
                imageUrl: url,
                isLoaded: true
            });
        });
    }

    onClick() {
        console.log(`You clicked on ${this.product.getName()} product.`);
    }

    render() {
        return (
            <div className='item'>
                <a href="single-product.html">
                    <div className="featured-item">
                        <figure>
                            <img src={this.state.imageUrl} className={(this.state.imageUrl) ? 'isLoaded' : ''} alt={this.product.getName()}/>
                        </figure>
                        <h4>{this.product.getName()}</h4>
                        <h6>{this.product.getPrice()}</h6>
                    </div>
                </a>
            </div>
        );
    }
}

export { ProductComponent }