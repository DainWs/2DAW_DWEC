import React from 'react';
import Product from '../models/Product';
import { DBManagerInstance, registre } from '../services/DatabaseManager';
import { ProductComponent } from './models/ProductComponent';

var productInstance;

class ProductList extends React.Component {
    constructor() {
        super();
        this.nameFiltre = '';
        this.products = [];

        productInstance = this;
        registre(function() { productInstance.update() });
    }

    update() {
        let productGenericObjects = DBManagerInstance.getProducts();
        this.products = [];
        for (let genericObject in productGenericObjects) {
            this.products.push(new Product(genericObject));
        }
        console.log(this.products);
    }

    onChangeFilter() {

    }

    getFilteredList() {
        let filteredProducts = [];
        for (let product in this.products) {
            if(product.name.contains(this.nameFiltre)) {
                filteredProducts.push(product);
            }
        }
        return filteredProducts;
    }

    render() {
        return (
            <div className="featured-items">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                            <div className="line-dec"></div>
                            <h1>Featured Items</h1>
                            </div>
                        </div>
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            {this.getFilteredList().map((product, index) => <ProductComponent key={index} product={product}></ProductComponent>)}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProductList }