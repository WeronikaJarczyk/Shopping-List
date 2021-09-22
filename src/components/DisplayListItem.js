import React from 'react';


const DisplayListItem = ({ listItem }) => {

  const { item, amount, unit } = listItem;

  return (
    <div className="card-item">{item} {amount}{unit}
    </div>
  );
};


export default DisplayListItem;