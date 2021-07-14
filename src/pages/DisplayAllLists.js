import React from 'react';
import { useSelector } from 'react-redux';
import DisplayList from '../components/DisplayList';
import { useDispatch } from 'react-redux';
import { delList } from '../actions/listAction';
import NoListImage from '../components/NoListsImage';
import Nav from '../components/Nav';


const DisplayAllLists = () => {

  const lists = useSelector(state => state.list);

  const dispatch = useDispatch();

  const deleteList = (id) => {
    dispatch(delList(id, lists));
  }

  return (
    <>
      <Nav />
      <div className="">
        <div className="container">
          {
            lists.length ? lists.map((arr) => {
              return <DisplayList key={arr.id} arr={arr} onDelete={deleteList} />
            }) : <NoListImage />
          }
        </div>
      </div>
    </>
  )
}

export default DisplayAllLists;
