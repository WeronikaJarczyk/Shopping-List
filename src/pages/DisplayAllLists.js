import React, { useEffect } from 'react';
import DisplayList from '../components/DisplayList';
import { useDispatch, useSelector } from 'react-redux';
import { delList, settList } from '../actions/listAction';
import NoListImage from '../components/NoListsImage';
import Nav from '../components/Nav';
import { DB_DeleteList, DB_DisplayList } from '../DB_requests';

const DisplayAllLists = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const displayListResponse = await DB_DisplayList();
      dispatch(settList(displayListResponse.lists));
    })();
  });

  const lists = useSelector(state => state.list);


  const deleteList = (id) => {
    DB_DeleteList(id)
      .then(dispatch(delList(id, lists)));
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
