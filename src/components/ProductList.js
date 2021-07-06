
import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ items, onDelete }) => {

  return (
    <div>
      {items.map((el) => {
        return <ProductListItem key={el.id} listItem={el} onDelete={onDelete} />
      })}
    </div>
  )
}

export default ProductList;