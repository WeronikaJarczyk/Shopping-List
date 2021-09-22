import React from 'react';
import DisplayListItem from './DisplayListItem';
import EditIcon from '@material-ui/icons/Edit';
import DeleteButton from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';


const DisplayList = ({ arr, onDelete }) => {
  const { _id, name, items } = arr;

  return (
    <div className="card">
      <h3>{name}
        <div className="float-right">
          <Link to={{ pathname: "/list", state: { listName: name, _id, button: true } }}><button className='delete'><EditIcon style={{ fill: '#01A500' }} /></button></Link>
          <button onClick={() => onDelete(_id)} className='delete'><DeleteButton style={{ fill: '#c00101' }} /></button>
        </div>
      </h3>
      <div className="card-body">
        {items.map((item) => <DisplayListItem key={item._id} listItem={item} />)}
      </div>
    </div>
  )
}

export default DisplayList;