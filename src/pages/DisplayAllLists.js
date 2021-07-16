import React, { useEffect } from 'react';
import DisplayList from '../components/DisplayList';
import { useDispatch, useSelector } from 'react-redux';
import { delList, setList } from '../actions/listAction';
import NoListImage from '../components/NoListsImage';
import Nav from '../components/Nav';
import { DB_DeleteList, DB_DisplayList } from '../DB_requests';

const DisplayAllLists = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const displayListResponse = await DB_DisplayList();
      dispatch(setList(displayListResponse.lists));
    })();
  }, []);

  const lists = useSelector(state => state.list);

  const deleteList = (_id) => {
    DB_DeleteList(_id)
      .then(dispatch(delList(_id, lists)));
  }

  return (
    <>
      <Nav />
      <div className="">
        <div className="container">
          {
            lists.length ? lists.map((arr) => {
              return <DisplayList key={arr._id} arr={arr} onDelete={deleteList} />
            }) : <NoListImage />
          }
        </div>
      </div>
    </>
  )
}

export default DisplayAllLists;
