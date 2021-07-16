
import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ items, onDelete }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => {
        console.log(item.id)
        return <ProductListItem key={item._id ? item._id : item.id} listItem={item} onDelete={onDelete} />
      })}
    </div>
  )
}

export default ProductList;