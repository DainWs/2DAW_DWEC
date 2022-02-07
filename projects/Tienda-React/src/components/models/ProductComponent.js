import React from 'react';

function getImageFor(productName) {
    return `images/product/${productName}.png`;
}

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.product = properties.product;
        this.name = this.product.name;
    }

    onClick() {
        console.log(`You clicked on ${this.name} product.`);
    }

    render() {
        return (
            <div class="col-lg-3 col-sm-6 col-md-3" onClick={this.onClick}>
                <a href="productpage.html">
                    <div class="box-img">
                        <h4>{this.name}</h4>
                        <img src={getImageFor} alt="" />
                    </div>
                </a>
            </div>
        );
    }
}

export { ProductComponent }