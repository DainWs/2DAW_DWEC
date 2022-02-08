import React from 'react';
import { StorageManagerInstance } from '../../services/StorageManager';

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
        this.state = { imageUrl: '/assets/images/loading.gif' };

        //TODO solve this
        StorageManagerInstance.getProductImageURL(this.product.id, function(url) {
            ProductComponent.this.setState({
                imageUrl: url
            });
        });
    }

    onClick() {
        console.log(`You clicked on ${this.product.getName()} product.`);
    }

    render() {
        return (
            <div className="owl-item cloned" style={{width: "245px",height: "35vh", minHeight: "35vh", margin: "10px"}}>
                <a href="single-product.html">
                    <div className="featured-item">
                        <img src={this.state.imageUrl} style={{overflow: 'hidden'}} alt={this.product.getName()}/>
                        <h4>{this.product.getName()}</h4>
                        <h6>{this.product.getPrice()}</h6>
                    </div>
                </a>
            </div>
        );
    }
}

export { ProductComponent }