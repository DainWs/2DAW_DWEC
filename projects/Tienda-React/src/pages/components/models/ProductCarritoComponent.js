import React from 'react';
import { StorageManagerInstance } from '../../../services/StorageManager';

class ProductCarritoComponent extends React.Component {

    constructor(properties) {
        super();
        this.orderLine = properties.orderLine;
        this.state = { 
            imageUrl: '/assets/images/loading.gif',
            numUnits: this.orderLine.getUnits(),
            totalProductPrice: this.orderLine.getTotalPrice()
        };
    }

    onClick() {
        console.log(`You clicked on ${this.product.getName()} product.`);
    }

    removeUnit() {
        this.orderLine.removeUnit();
        this.update();
        this.props.onChange(this.orderLine);
    }

    addUnit() {
        this.orderLine.addUnit();
        this.update();
        this.props.onChange(this.orderLine);
    }

    delete() {
        this.props.onRemove(this.orderLine);
    }

    update() {
        this.setState({
            numUnits: this.orderLine.getUnits(),
            totalProductPrice: this.orderLine.getTotalPrice()
        });
    }

    render() {
        //TODO solve this
        var instance = this;
        StorageManagerInstance.getImagePromiseURL(this.product.id)
            .then(function(url) {
                instance.setState({
                    imageUrl: url
                });
            })
            .catch((error) => {
                console.log(error);
            });
        
        return (
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img src={this.state.imageUrl} alt={this.product.getName()} className="img-fluid rounded-3"/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{this.product.getName()}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2" onClick={this.removeUnit}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <input min="0" name="quantity" value={this.state.numUnits} type="number" className="form-control form-control-sm" />

                            <button className="btn btn-link px-2" onClick={this.addUnit}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">{this.state.totalProductPrice}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a onClick={this.delete} className="text-danger">
                                <i className="fas fa-trash fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProductCarritoComponent }

