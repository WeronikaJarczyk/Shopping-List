
import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ items, onDelete }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => {
        return <ProductListItem key={item._id ? item._id : item.id} listItem={item} onDelete={onDelete} />
      })}
    </div>
  )
}

export default ProductList;