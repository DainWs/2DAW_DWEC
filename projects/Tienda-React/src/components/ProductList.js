import React from 'react';
import Product from '../models/Product';
import { DBManagerInstance, registre } from '../services/DatabaseManager';
import { ProductComponent } from './models/ProductComponent';
import $ from 'jquery';

var instance;

class ProductList extends React.Component {
    constructor() {
        super();
        this.nameFiltre = '';
        this.products = [];
        this.state = { products: [] };

        instance = this;
        registre(function () { instance.update() });
    }

    update() {
        console.log('Update List');
        let productGenericObjects = DBManagerInstance.getProducts();
        this.products = [];
        for (let i = 0; i < productGenericObjects.length; i++) {
            const genericObject = productGenericObjects[i];
            this.products.push(new Product(genericObject));
        }

        let filteredProducts = this.products.map((product, index) => {
            if (product.getName().includes(this.nameFiltre)) {
                return <ProductComponent key={index} product={product}></ProductComponent>;;
            }
            return '';
        });

        this.setState({
            products: filteredProducts
        });
    }

    onChangeFilter() {

    }

    render() {
        return (
            <div>
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
                                <div className="owl-carousel owl-theme owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage">
                                            {this.state.products}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProductList }