import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'
import Home from './pages/Home'
import Coin1 from './pages/Coin1'
import Coin2 from './pages/Coin2'
import Coin3 from './pages/Coin3'
import Coin4 from './pages/Coin4'
import Coin5 from './pages/Coin5'
import Coin6 from './pages/Coin6'
import Coin7 from './pages/Coin7'
import Coin8 from './pages/Coin8'
import Coin9 from './pages/Coin9'
import Coin10 from './pages/Coin10'
import About from './pages/About'

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
          <Route
            exact path ='/BigBlueApe'
            component={Coin1}
          />
          <Route
            exact path ='/FunkyVaporApe'
            component={Coin2}
          />
          <Route
            exact path ='/GreatGreenApe'
            component={Coin3}
          />
          <Route
            exact path ='/GrapeApe'
            component={Coin4}
          />
          <Route
            exact path ='/MidnightApe'
            component={Coin5}
          />
          <Route
            exact path ='/CrimsonApe'
            component={Coin6}
          />
          <Route
            exact path ='/CottonCandyApe'
            component={Coin7}
          />
          <Route
            exact path ='/ProfessorPlumApe'
            component={Coin8}
          />
          <Route
            exact path ='/CherryBombApe'
            component={Coin9}
          />
          <Route
            exact path ='/CherryBombApe'
            component={Coin9}
          />
          <Route
            exact path ='/SilverBackApe'
            component={Coin10}
          />
          <Route
            exact path ='/about'
            component={About}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
