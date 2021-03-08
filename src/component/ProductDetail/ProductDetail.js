import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import '../ProductDetail/ProductDetail.css';

const ProductDetail = () => {
    const { productKey } = useParams();
   const product = fakeData.find(pd => pd.key === productKey);
   console.log(product)
    return (
        <div>
            <h2>{productKey}Detail Coming Soon....</h2>
            <Product showButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;