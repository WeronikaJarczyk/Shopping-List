import { Link, useHistory } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Nav() {
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <nav>
      <div className="navbar">
        <ShoppingCartIcon className="fa fa-shopping-cart" />
        <Link to="/home" className="nav-brand on-hover">Shopping List</Link>
        <Link to="/list/display" className="nav-item on-hover">Display All Lists</Link>
      </div>
      <button onClick={logOut} className="btn btn-light sm on-hover">Log Out</button>
    </nav>
  )
}

export default Nav;
