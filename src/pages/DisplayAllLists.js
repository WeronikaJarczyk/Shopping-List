import React from 'react';
import { useSelector } from 'react-redux';
import DisplayList from '../components/DisplayList';
import { useDispatch } from 'react-redux';
import { delList } from '../actions/listAction';
import NoListImage from '../components/NoListsImage';



const DisplayAllLists = () => {

  const lists = useSelector(state => state);

  const dispatch = useDispatch();

  const deleteList = (id) => {
    dispatch(delList(id, lists));
  }

  return (
    <div className="">
      <div className="container">
        {
          lists.length ? lists.map((arr) => {
            return <DisplayList key={arr.id} arr={arr} onDelete={deleteList} />
          }) : <NoListImage />
        }
      </div>
    </div>
  )
}

export default DisplayAllLists;
