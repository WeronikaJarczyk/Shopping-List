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

  const { register, handleSubmit, reset } = useForm({ defaultValues: { text: "" } });

  const { listName, _id, button } = location.state ?? { listName: '', _id: null, button: true };

  const [buttonState, setButtonState] = useState(button);

  const lists = useSelector(state => state.list);
  let listItem = [];

  if (_id) {
    listItem = lists.filter(arr => arr._id === _id)[0].items;
  }

  const [items, setItems] = useState(listItem);

  const history = useHistory();

  const onAddToList = async () => {
    if (_id) {
      const editResponse = await DB_EditList(items, _id);

      dispatch(editList(editResponse.items, _id));

      history.push('/list/display');
    } else {
      const data = await DB_AddList(items, listName);

      dispatch(addList(data.newList.items, data.newList.name, data.newList._id));

      history.push('/list/display');
    }
  }

  const onSubmit = (data) => {
    if (data.item === "" || data.amount === "") {
    } else {
      const _id = nextId();
      setItems([...items, { ...data, _id }]);
      setButtonState(true);
      reset({ text: '' });
    }
  }

  const deleteItem = (_id) => {
    console.log(_id);
    const updatedItems = items.filter(task => task._id !== _id);
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
              <input id="button" type='submit' className='btn btn-dark w-100' value='Add To List' />
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
