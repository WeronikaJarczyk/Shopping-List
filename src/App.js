import './App.css';
import Nav from './components/Nav';
import Home from './pages/HomePage';
import NewItem from './pages/NewItem';
import DisplayAllLists from './pages/DisplayAllLists';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/list" exact component={NewItem}></Route>
          <Route path="/list/display" exact component={DisplayAllLists}></Route>
        </Switch>
      </div>
    </Router >
  );
}


export default App;
