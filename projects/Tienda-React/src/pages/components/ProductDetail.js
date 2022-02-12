import React from 'react';
import OrderLine from "../../models/OrderLine";
import { dbService } from "../../services/firebase/DatabaseService";
import { localStorageService } from "../../services/LocalStorageService";
import { storageService } from '../../services/firebase/StorageService';

class ProductDetail extends React.Component {
    constructor(properties) {
        super();
        let product = dbService.getProduct(properties.productId);

        this.order = localStorageService.loadOrder();
        this.state = { 
            product: product, 
            numUnits: 1,
            isInShoppingCar: this.order.hasProduct(product),
            imageUrl: '/assets/images/loading.gif'
        };
        this.isObjectMounted = false;
    }

    addToShoppingCar() {
        let newOrderLine = new OrderLine();
        newOrderLine.setPedidoId(this.order.id);
        newOrderLine.setProduct(this.state.product);
        newOrderLine.setUnits(this.state.numUnits);
        this.order.addOrderLine(newOrderLine);
        localStorageService.saveOrder(this.order);

        if (!this.state.isInShoppingCar) {
            this.setState({
                isInShoppingCar: this.order.hasOrderLine(newOrderLine)
            })
        }
    }

    componentDidMount() {
        this.isObjectMounted = true;
        var instance = this;
        storageService.getImagePromiseURL(this.state.product.id)
            .then(function(url) {
                if (instance.isObjectMounted) {
                    instance.setState({
                        imageUrl: url
                    });
                }
            });
    }

    componentWillUnmount() {
        this.isObjectMounted = false;
    }

    render() {
        let shoppingCarFormHTML = (
            <form action="" method="get">
                <label htmlFor="quantity">Quantity:</label>
                <input name="quantity" type="number" className="quantity-text" id="quantity" min="0" max={this.state.product.getStock()} value={this.state.numUnits}/>
                <button type='button' onClick={() => {this.addToShoppingCar()}} className="button">Order Now!</button>
            </form>
        );

        if (this.state.product.getStock() <= 0) {
            shoppingCarFormHTML = (
               <span style={{color: "red"}}>No more stock available.</span>
            );
        }

        console.log(this.state.isInShoppingCar);
        if (this.state.isInShoppingCar) {
            shoppingCarFormHTML = (
                <span style={{color: "green"}}>You have already this product in you shopping car.</span>
            );
        }

        return (
            <div className="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <div className="line-dec"></div>
                                <h1>{this.state.product.getName()}</h1>
                            </div>
                        </div>
                        <div className="col-md-6">                            
                            <div className="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
                                <ul className="slides" style={{width: "800%", transitionDuration: "0s", transform: "translate3d(0px, 0px, 0px)"}}>
                                    <li className="flex-active-slide" style={{width: "498px", marginRight: "0px", float: "left", display: "block"}}>
                                        <img src={this.state.imageUrl} draggable="false"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-content">
                                <h4>{this.state.product.getName()}</h4>
                                <h6>{this.state.product.getPrice()}</h6>
                                <p>{this.state.product.getDescription()}</p>
                                <span>{this.state.product.getStock()} left on stock</span>
                                {shoppingCarFormHTML}
                                <div className="down-content">
                                    <div className="categories">
                                        <h6>Category: <span>{this.state.product.getCategory()}</span></h6>
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
export default ProductDetail;