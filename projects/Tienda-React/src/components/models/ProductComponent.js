import React from 'react';

function getImageFor(productName) {
    return `images/product/${productName}.png`;
}

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
    }

    onClick() {
        console.log(`You clicked on ${this.product.name} product.`);
    }

    getImageURL() {
        return "%PUBLIC_URL%/assets/images/"+this.product.name+".jpg";
    }

    render() {
        return (
            <a href="single-product.html">
                <div class="featured-item">
                    <img src={this.getImageURL()} alt={this.product.name}/>
                    <h4>{this.product.name}</h4>
                    <h6>{this.product.price}</h6>
                </div>
            </a>
        );
    }
}

export { ProductComponent }