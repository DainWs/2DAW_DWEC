import React from 'react';
import DBManagerInstance from '../services/DatabaseManager';
import { ProductComponent } from './models/ProductComponent';

class ProductList extends React.Component {
    constructor() {
        super();
        this.nameFiltre = '';
        this.products = DBManagerInstance.getProducts();
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
            <div class="featured-items">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-heading">
                            <div class="line-dec"></div>
                            <h1>Featured Items</h1>
                            </div>
                        </div>
                    <div class="col-md-12">
                        <div class="owl-carousel owl-theme">
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