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
import ApeCoins from './pages/ApeCoins'
import ElephantCoins from './pages/ElephantCoins'
import ElephantCoin1 from './pages/ElephantCoin1'
import ElephantCoin2 from './pages/ElephantCoin2'
import ElephantCoin3 from './pages/ElephantCoin3'
import ElephantCoin4 from './pages/ElephantCoin4'
import ElephantCoin5 from './pages/ElephantCoin5'
import ElephantCoin6 from './pages/ElephantCoin6'
import ElephantCoin7 from './pages/ElephantCoin7'
import ElephantCoin8 from './pages/ElephantCoin8'
import ElephantCoin9 from './pages/ElephantCoin9'
import ElephantCoin10 from './pages/ElephantCoin10'
import ElephantCoin11 from './pages/ElephantCoin11'




/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

//Great Green Grasslands Elephant
//Sherbert Sunset Elephant
//Magestic Magenta Elephant
//Pink Pacifist Elephant
//Graying Gray Elephant
//Tinkering Twilight Elephant
//Forest Funk Elephant
//Purple Passion Elephant
//Neon Nerd Elephant
//Sunny Savanna Elephant
//OG Orange Elephant



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
          <Route
            exact path ='/ApeCoins'
            component={ApeCoins}
          />
          <Route
            exact path ='/ElephantCoins'
            component={ElephantCoins}
          />
          <Route
            exact path ='/GreatGreenGrasslandsElephant'
            component={ElephantCoin1}
          />
          <Route
            exact path ='/SherbertSunsetElephant'
            component={ElephantCoin2}
          />
           <Route
            exact path ='/MagesticMagentaElephant'
            component={ElephantCoin3}
          />
          <Route
            exact path ='/PinkPacifistElephant'
            component={ElephantCoin4}
          />
          <Route
            exact path ='/GrayingGrayElephant'
            component={ElephantCoin5}
          />
          <Route
            exact path ='/TinkeringTwilightElephant'
            component={ElephantCoin6}
          />
          <Route
            exact path ='/ForestFunkElephant'
            component={ElephantCoin7}
          />
          <Route
            exact path ='/PurplePassionElephant'
            component={ElephantCoin8}
          />
          <Route
            exact path ='/NeonNerdElephant'
            component={ElephantCoin9}
          />
          <Route
            exact path ='/SunnySavannaElephant'
            component={ElephantCoin10}
          />
          <Route
            exact path ='/OGOrangeElephant'
            component={ElephantCoin11}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
