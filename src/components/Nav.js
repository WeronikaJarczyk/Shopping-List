import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { makeStyles, Typography } from '@material-ui/core';

// const useStyle = makeStyles({
//   navbar: {
//     color: 'white'
//   }
// });


function Nav() {

  // const Styleclasses = useStyle();

  return (
    <nav>
      <div className="navbar">
        <ShoppingCartIcon className="fa fa-shopping-cart" />
        <Link to="/" className="nav-brand on-hover">Shopping List</Link>
        <Link to="/list/display" className="nav-item on-hover">Display All Lists</Link>
      </div>
    </nav>);
}

export default Nav;
