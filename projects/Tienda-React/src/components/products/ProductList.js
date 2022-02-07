import React from 'react';
import { CategoriesComponent } from '../models/CategoriesComponent';
import { ProductComponent } from '../models/ProductComponent';

class ProductList extends React.Component {
    constructor() {
        super();
        this.nameFiltre = '';
        this.products = [];
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
            <div class="page-content-product">
                <div class="main-product">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="find-box">
                                <h1>Find your next product or<br/>business partner here.</h1>
                                <h4>It has never been easier.</h4>
                                <div class="product-sh">
                                    <div class="col-sm-6">
                                        <div class="form-sh">
                                            <input type="text" name="search" value={this.nameFiltre} placeholder="Search something you love"></input>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                        <div class="form-sh">
                                            <CategoriesComponent></CategoriesComponent>
                                        </div>
                                    </div>
                                    <div class="col-sm-3">
                                    <div class="form-sh"> <a class="btn" href="#">Search</a> </div>
                                    </div>
                                    <p>Or simply<a href="#"> click here </a> and get inspired!</p>
                                </div>
                            </div>
                        </div>
                        <div class="row clearfix">
                            {getFilteredList().map((product, index) =>  <ProductComponent product={product}></ProductComponent>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProductList }