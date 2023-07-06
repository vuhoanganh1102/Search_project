import React from 'react';

const Product = ({product}) =>{
    console.log(product);
    return (
        <tr>
            <td className='border border-slate-600'>{product.fullName}</td>
            <td className='border border-slate-600'>{product.class}</td>
            <td className='border border-slate-600'>{product.organization}</td>
        </tr>
         
    );
};

export default Product;