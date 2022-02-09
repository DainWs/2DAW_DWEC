import React from 'react';
import { StorageManagerInstance } from '../../../services/StorageManager';

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
        this.state = { imageUrl: '/assets/images/loading.gif' };
    }

    onClick() {
        console.log(`You clicked on ${this.product.getName()} product.`);
    }

    render() {
        //TODO solve this
        var instance = this;
        StorageManagerInstance.getImagePromiseURL(this.product.id)
            .then(function(url) {
                instance.setState({
                    imageUrl: url
                });
            })
            .catch((error) => {
                console.log(error);
            });
        
        return (
            <div className='item'>
                <a href="single-product.html">
                    <div className="featured-item">
                        <figure>
                            <img src={this.state.imageUrl} alt={this.product.getName()}/>
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