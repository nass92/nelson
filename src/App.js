import logo from './logo.svg';
import './App.css';
import NavBar from './components/Log & footer/NavBar';
import Home from './components/HomeSection/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>

        <Home />

      </Router >
    </>
  );
}

export default App;


