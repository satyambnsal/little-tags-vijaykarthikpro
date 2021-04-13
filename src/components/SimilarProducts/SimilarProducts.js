import React from 'react';
import ProductsData from '../../data/products';
import Card from '../Card/Card';
import './SimilarProducts.scss';

const onlyFourProducts = ProductsData.filter((_,index) => index < 4);

export default function SimilarProducts() {


    return (<div className="similar-products-container">
        <h1 className="heading">Similar Products</h1>
        <div className="card-container">
            <Card data={onlyFourProducts}/>
        </div>
    </div>)
}