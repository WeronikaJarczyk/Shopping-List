import React from 'react';
// import DeleteButton from './DeleteButton';
import CloseIcon from '@material-ui/icons/Close';


const ProductListItem = ({ listItem, onDelete }) => {

  const { id, item, amount, unit } = listItem;

  return (
    <div className='list-item'>
      {item} {amount}{unit}
      <button onClick={() => onDelete(id)} className='delete'><CloseIcon style={{ fill: '#c00101' }} /></button>
    </div>
  );
};

export default ProductListItem;
