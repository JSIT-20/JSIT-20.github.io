import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllNavbar from './Navbar';
import Home from './Home';
import Random from './Random';

function App() {
  return (
    <Router>
      <div className="App">
        <AllNavbar></AllNavbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/random">
              <Random></Random>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
