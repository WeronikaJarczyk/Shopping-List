import React from 'react';
import DisplayListItem from './DisplayListItem';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';


const ProductList = ({ arr, onDelete }) => {
  const { id, name, items } = arr;

  return (
    <div className="card">
      <h3>{name}
        <div className="float-right">
          <Link to={{ pathname: "/list", state: { listName: name, id: id, button: true } }}><button className='delete'><EditIcon style={{ fill: '#01A500' }} /></button></Link>
          <button onClick={() => onDelete(id)} className='delete'><DeleteButton style={{ fill: '#c00101' }} /></button>
        </div>
      </h3>
      <div className="card-body">
        {items.map((el) => <DisplayListItem key={el.id} listItem={el} />)}
      </div>
    </div>
  )
}

export default ProductList;