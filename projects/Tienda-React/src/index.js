import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Product from './models/Product';
import reportWebVitals from './reportWebVitals';
import DBManagerInstance from './services/DatabaseManager';

let product = new Product();
product.setName('Camiseta');
product.setPrice(8.96);
DBManagerInstance.setProduct(product);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
