import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, Redirect, useHistory } from 'react-router-dom';
import ProductList from '../components/ProductList';
import NewShopping from '../img/newShopping.svg';
import nextId from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import { addList, editList } from '../actions/listAction';
import Nav from '../components/Nav';
import { DB_AddList, DB_EditList } from '../DB_requests';

const NewItem = () => {

  const location = useLocation();

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { listName, id, button } = location.state ?? { listName: '', id: null, button: true };

  const [buttonState, setButtonState] = useState(button);

  const lists = useSelector(state => state.list);
  let listItem = [];

  if (id) {
    listItem = lists.filter(arr => arr.id === id)[0].items;
  }

  const [items, setItems] = useState(listItem);

  const history = useHistory();

  const onAddToList = async () => {
    if (id) {
      const editResponse = await DB_EditList(items, id);

      dispatch(editList(editResponse.items, id));

      history.push('/list/display');
    } else {
      DB_AddList(items, listName)
        .then((data) => {
          dispatch(addList(data.items, data.name, data._id));
        })
        .then(history.push('/list/display'));
    }
  }

  const onSubmit = (data) => {
    if (data.item === "" || data.amount === "") {
    } else {
      setItems([...items, { ...data, id: nextId() }]);
      setButtonState(true);
    }
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter(task => task.id !== id);
    setItems(updatedItems);
    if (!updatedItems.length) {
      setButtonState(false);
    }
  }

  if (!listName) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Nav />
      <section className="container">
        <div className="list-name">{listName === "" ? "New List" : listName}</div>
        <img src={NewShopping} className="img-sm" alt="" />
        <div className='list-page'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-group' id='container'>
              Add Item:
              <input className='input w-100' type='text' placeholder='Enter item' name='item' {...register('item')} />
              <div className=''>
                <input className='input' type='number' placeholder='Enter value' name='amount'  {...register('amount')} />
                <select className='input' name="unit" {...register('unit')}>
                  <option value='x'>Amount</option>
                  <option value='kg'>KiloGram</option>
                  <option value='l'>Liter</option>
                </select>
              </div>
              <input type='submit' className='btn btn-dark w-100' value='Add To List' />
            </div>
          </form>


          {buttonState && <button onClick={() => onAddToList()} className="btn btn-light w-100">Save</button>}

          {buttonState &&
            <div className='list-display'>
              <ProductList items={items} onDelete={deleteItem} />
            </div>
          }

        </div>
      </section >
    </>
  );
}

export default NewItem;
