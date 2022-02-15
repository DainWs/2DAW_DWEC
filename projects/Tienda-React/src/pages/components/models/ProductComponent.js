import React from 'react';
import { storageService } from '../../../services/firebase/StorageService';
import { Link } from 'react-router-dom';

class ProductComponent extends React.Component {
    constructor(properties) {
        super();
        this.isObjectMounted = false;
        this.product = properties.product;
        this.state = { imageUrl: '/assets/images/loading.gif' };
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
            <div className='item'>
                <Link to={'/product/'+this.product.id}>
                    <div className="featured-item">
                        <figure>
                            <img src={this.state.imageUrl} alt={this.product.getName()}/>
                        </figure>
                        <h4>{this.product.getName()}</h4>
                        <h6>${this.product.getPrice()}</h6>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ProductComponent;