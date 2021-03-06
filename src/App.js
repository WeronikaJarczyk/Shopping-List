import './App.css';
import Home from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import Register from './pages/Register';
import NewItem from './pages/NewItem';
import DisplayAllLists from './pages/DisplayAllLists';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import ReactNotifications from 'react-notifications-component';


function App() {
  return (
    <Router>
      <div className="App">
        <ReactNotifications />
        <Switch>
          <Route path="/" exact component={LogInPage}></Route>
          <Route path="/register" exact component={Register}></Route>
          <PrivateRoute component={Home} path="/home" exact />
          <PrivateRoute component={NewItem} path="/list" exact />
          <PrivateRoute component={DisplayAllLists} path="/list/display" exact />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
