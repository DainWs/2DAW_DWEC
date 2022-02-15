import React from 'react';
import { Link } from 'react-router-dom';
import { storageService } from '../../../services/firebase/StorageService';

class ProductCarritoComponent extends React.Component {

    constructor(properties) {
        super();
        this.orderLine = properties.orderLine;
        this.product = this.orderLine.product;
        this.state = { 
            imageUrl: '/assets/images/loading.gif',
            numUnits: this.orderLine.getUnits(),
            totalProductPrice: this.orderLine.getTotalPrice()
        };
        this.isObjectMounted = false;
    }

    removeUnit(instance) {
        instance.orderLine.removeUnit();
        instance.update();
        instance.props.onChange(instance.orderLine);
    }

    addUnit(instance) {
        instance.orderLine.addUnit();
        instance.update();
        instance.props.onChange(instance.orderLine);
    }

    delete(instance) {
        instance.props.onRemove(instance.orderLine);
    }

    update() {
        this.setState({
            numUnits: this.orderLine.getUnits(),
            totalProductPrice: this.orderLine.getTotalPrice()
        });
    }

    componentDidMount() {
        this.isObjectMounted = true;
        var instance = this;
        storageService.getImagePromiseURL(this.product.id)
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
        return (
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <Link to={'/product/'+this.product.id} className="col-md-2 col-lg-2 col-xl-2">
                            <img src={this.state.imageUrl} alt={this.product.getName()} className="img-fluid rounded-3"/>
                        </Link>
                        <Link to={'/product/'+this.product.id} className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{this.product.getName()}</p>
                        </Link>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2" onClick={() => {this.removeUnit(this)}}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <span className="form-control form-control-sm" style={{textAlign: "center"}}>{this.state.numUnits}</span>

                            <button className="btn btn-link px-2" onClick={() => {this.addUnit(this)}}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0" style={{textAlign: "right"}}>${this.state.totalProductPrice}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a onClick={() => {this.delete(this)}} className="text-danger">
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

