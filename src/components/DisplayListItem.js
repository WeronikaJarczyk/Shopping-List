import React from 'react';


const ProductListItem = ({ listItem }) => {

  const { item, amount, unit } = listItem;

  return (
    <div className="card-item">{item} {amount}{unit}
    </div>
  );
};


export default ProductListItem;