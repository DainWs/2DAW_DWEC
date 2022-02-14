import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductComponent from './models/ProductComponent';
import { dbService } from '../../services/firebase/DatabaseService';

var instance;
class ProductList extends React.Component {
    constructor() {
        super();
        this.isComponentMounted = false;
        this.products = [];
        this.state = { products: [] };
        this.update();
        instance = this;
    }

    update() {
        console.log('Update List');
        this.products = dbService.getProducts();
        let procesedProducts = [];
        for (const product of this.products) {
            procesedProducts.push(
                <ProductComponent key={product.id} product={product}></ProductComponent>
            );
        }

        if (this.isComponentMounted) {
            this.setState({ products: procesedProducts });
        } else {
            this.state = { products: procesedProducts };
        }
    }

    componentDidMount() {
        this.isComponentMounted = true;
        dbService.registre(ProductList.name, function () { instance.update() });
        this.update();
    }

    componentWillUnmount() {
        this.isComponentMounted = false;
        dbService.unregistre(ProductList.name);
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
                        </div>
                        <div className="col-md-12">
                            <OwlCarousel className='owl-theme' loop margin={10}>
                                {this.state.products}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProductList }