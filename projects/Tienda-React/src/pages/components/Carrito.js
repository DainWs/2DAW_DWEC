import React from 'react';
import { dbService } from '../../services/firebase/DatabaseService';
import { localStorageService } from '../../services/LocalStorageService';
import { ProductCarritoComponent } from './models/ProductCarritoComponent';

class Carrito extends React.Component {
    constructor() {
        super();
        this.order = localStorageService.loadOrder();
        this.state = {
            orderLines: this.processOrderLines(this.order.getOrders())
        };
    }

    onOrderLineChange(orderLine) {
        this.order.updateOrderLine(orderLine);
        this.update();
    }

    onOrderLineRemove(orderLine) {
        this.order.removeOrderLine(orderLine);
        this.update();
    }

    onBuy() {
        dbService.setOrder(this.order);
        localStorageService.clearCarrito();
        this.order = localStorageService.loadOrder();
        this.update();
    }

    update() {
        this.setState({
            orderLines: this.processOrderLines(this.order.getOrders())
        });
    }

    processOrderLines(ordersLines) {
        return ordersLines.map((orderLine, index) => {
            return <ProductCarritoComponent 
                key={index} 
                orderLine={orderLine} 
                onChange={this.onOrderLineChange} 
                onRemove={this.onOrderLineRemove}>
            </ProductCarritoComponent>;
        });
    }
    
    render() {
        let buyHTML = (
            <div className="card">
                <div className="card-body">
                    <button type="button" className="btn btn-warning btn-block btn-lg" onClick={this.onBuy}>Proceed to Pay</button>
                </div>
            </div>
        )

        let lenght = this.state.orderLines.lenght;
        if (lenght == undefined || lenght < 1) {
            buyHTML = (
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-normal mb-0 text-black">You dont have products.</h4>
                </div>
            );
        }

        return (
            <section style={{background: "#eee"}}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            </div>

                            {this.state.orderLines}
                            {buyHTML}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Carrito;