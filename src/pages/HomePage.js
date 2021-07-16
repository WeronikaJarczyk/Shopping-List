import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../img/undraw_shopping_app_flsj.svg';
import Nav from '../components/Nav';


const HomePage = () => {

  const [name, setName] = useState("");

  const [buttonState, setButtonState] = useState(false);

  const addName = (e) => {
    const name = e.target.value;
    if (name.length !== 0) {
      setName(name);
      setButtonState(true);
    } else {
      setButtonState(false);
    }

  }

  return (
    <section>
      <Nav />
      <div className="container">
        <img src={img} className="img-md" alt="" />
        <div className="input-group">
          <input className="input" type="text" placeholder="Name Your List" onChange={addName} />
          {buttonState && <Link to={{ pathname: "/list", state: { listName: name, _id: null, button: false } }}><button className="btn btn-dark">Create New List</button></Link>}
        </div>
      </div>
    </section>
  );
}

export default HomePage
