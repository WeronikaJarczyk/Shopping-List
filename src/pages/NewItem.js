import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLocation, Link, Redirect } from 'react-router-dom';
import ProductList from '../components/ProductList';
import NewShopping from '../img/newShopping.svg';
import nextId from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import { addList, editList } from '../actions/listAction';

// function checkName(name) {
//   if (!name) {
//     return <Redirect to='/' />;
//   }
// }


const NewItem = () => {

  const location = useLocation();

  // checkName(location.listName);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const { listName, id, button } = location.state ?? { listName: '', id: null, button: true };

  const [buttonState, setButtonState] = useState(button);

  const lists = useSelector(state => state);
  let listItem = [];

  // jeśli lista istnieje to ustawiamy items na elmenty, które mamy edytować
  if (id) {
    listItem = lists.filter(arr => arr.id === id)[0].elems;
  }

  const [items, setItems] = useState(listItem);

  const onAddToList = () => {
    if (id) {
      dispatch(editList(items, id, lists));
    } else {
      dispatch(addList(items, listName));
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


        {buttonState && <Link to={'/list/display'}><button onClick={() => onAddToList()} className="btn btn-light w-100">Save</button></Link>}

        {buttonState &&
          <div className='list-display'>
            <ProductList items={items} onDelete={deleteItem} />
          </div>
        }

      </div>
    </section >);
}

export default NewItem;
