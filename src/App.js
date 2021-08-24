import logo from './logo.svg';
import './App.css';
import NavBar from './components/Log & footer/NavBar';
import Home from './components/HomeSection/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/art' />
        </Switch>

      </Router >
    </>
  );
}

export default App;


