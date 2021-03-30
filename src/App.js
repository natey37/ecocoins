import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'
import Home from './pages/Home'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
             exact path='/' 
             component={Home}
          />

          
        </Switch>
      </Router>
      <h1>THIS IS ECO COINS</h1>
    </div>
  );
}

export default App;
