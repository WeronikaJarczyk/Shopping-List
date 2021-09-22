import React, { useEffect, useState } from 'react';
import DisplayList from '../components/DisplayList';
import { useDispatch, useSelector } from 'react-redux';
import { delList, setList } from '../actions/listAction';
import NoListImage from '../components/NoListsImage';
import Nav from '../components/Nav';
import { DB_DeleteList, DB_DisplayList } from '../DB_requests';

const DisplayAllLists = () => {

  const dispatch = useDispatch();

  const [shouldDisplay, setShouldDisplay] = useState(false);

  useEffect(() => {
    (async () => {
      const displayListResponse = await DB_DisplayList();
      dispatch(setList(displayListResponse.lists));
      setShouldDisplay(true);
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
      {shouldDisplay &&
        <div className="container">
          {(lists.length ? lists.map((arr) => {
            return <DisplayList key={arr._id} arr={arr} onDelete={deleteList} />
          }) : <NoListImage />)
          }
        </div>
      }
    </>
  )
}


export default DisplayAllLists;
