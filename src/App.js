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
import GiraffeCoins from './pages/GiraffeCoins'
import GiraffeCoin1 from './pages/GiraffeCoin1'
import GiraffeCoin2 from './pages/GiraffeCoin2'
import GiraffeCoin3 from './pages/GiraffeCoin3'
import GiraffeCoin4 from './pages/GiraffeCoin4'
import GiraffeCoin5 from './pages/GiraffeCoin5'
import GiraffeCoin6 from './pages/GiraffeCoin6'
import GiraffeCoin7 from './pages/GiraffeCoin7'
import GiraffeCoin8 from './pages/GiraffeCoin8'
import GiraffeCoin9 from './pages/GiraffeCoin9'
import GiraffeCoin10 from './pages/GiraffeCoin10'
import GiraffeCoin11 from './pages/GiraffeCoin11'
import GiraffeCoin12 from './pages/GiraffeCoin12'
import RhinoCoins from './pages/RhinoCoins'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import RhinoCoin11 from './pages/RhinoCoin11';
import RhinoCoin12 from './pages/RhinoCoin12';
import RhinoCoin10 from './pages/RhinoCoin10';
import RhinoCoin9 from './pages/RhinoCoin9';
import RhinoCoin8 from './pages/RhinoCoin8';
import RhinoCoin7 from './pages/RhinoCoin7';
import RhinoCoin6 from './pages/RhinoCoin6';
import RhinoCoin5 from './pages/RhinoCoin5';
import RhinoCoin4 from './pages/RhinoCoin4';
import RhinoCoin3 from './pages/RhinoCoin3';
import RhinoCoin2 from './pages/RhinoCoin2';
import RhinoCoin1 from './pages/RhinoCoin1';

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

// {Coin('GreenGatsbyGiraffe', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal1.gif')}
//                         {Coin('EternalSummerGiraffe', '25%', '26%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal2.gif')}
//                         {Coin('CottonCandyDreamsGiraffe', '25%', '42%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal3.gif')}
//                         {Coin('JungleJamGiraffe', '25%', '58%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal4.gif')}
//                         {Coin('NeonNitroGiraffe', '25%', '74%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal5.gif')}
//                         {Coin('JungleBoogeyGiraffe', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal6.gif')}
                        
                       
//                         {Coin('EasyBreezyGiraffe', '75%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal7.gif')}
//                         {Coin('MidnightMadnessGiraffe', '75%', '26%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal8.gif')}
//                         {Coin('WhisperingWhiteGiraffe', '75%', '42%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal9.gif')}
//                         {Coin('SummerBluesGiraffe', '75%', '58%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal10.gif')}
//                         {Coin('RazzyRaspberryGiraffe', '75%', '74%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal11.gif')}
//                         {Coin('HootinHawlloweenGiraffe', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal12.gif')}



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
            exact path ='/GiraffeCoins'
            component={GiraffeCoins}
          />
          <Route
            exact path ='/RhinoCoins'
            component={RhinoCoins}
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
          <Route
            exact path ='/GreenGatsbyGiraffe'
            component={GiraffeCoin1}
          />
           <Route
            exact path ='/EternalSummerGiraffe'
            component={GiraffeCoin2}
          />
           <Route
            exact path ='/CottonCandyDreamsGiraffe'
            component={GiraffeCoin3}
          />
           <Route
            exact path ='/JungleJamGiraffe'
            component={GiraffeCoin4}
          />
          <Route
            exact path ='/NeonNitroGiraffe'
            component={GiraffeCoin5}
          />
          <Route
            exact path ='/JungleBoogeyGiraffe'
            component={GiraffeCoin6}
          />
          <Route
            exact path ='/EasyBreezyGiraffe'
            component={GiraffeCoin7}
          />
          <Route
            exact path ='/MidnightMadnessGiraffe'
            component={GiraffeCoin8}
          />
          <Route
            exact path ='/WhisperingWhiteGiraffe'
            component={GiraffeCoin9}
          />
           <Route
            exact path ='/SummerBluesGiraffe'
            component={GiraffeCoin10}
          />
           <Route
            exact path ='/RazzyRaspberryGiraffe'
            component={GiraffeCoin11}
          />
          <Route
            exact path ='/HootinHalloweenGiraffe'
            component={GiraffeCoin12}
          />
          <Route
            exact path ='/NeonGothicRhino'
            component={RhinoCoin1}
          />
          <Route
            exact path ='/YellowThunderRhino'
            component={RhinoCoin2}
          />
          <Route
            exact path ='/GrassyNGassyGreenRhino'
            component={RhinoCoin3}
          />
          <Route
            exact path ='/StompingStormRhino'
            component={RhinoCoin4}
          />
          <Route
            exact path ='/RagingRedRhino'
            component={RhinoCoin5}
          />
          <Route
            exact path ='/OrangeCrushRhino'
            component={RhinoCoin6}
          />
          <Route
            exact path ='/GreatGoldenRhino'
            component={RhinoCoin7}
          />
          <Route
            exact path ='/ParadisePunchRhino'
            component={RhinoCoin8}
          />
          <Route
            exact path ='/SimmeringSwimmingRhino'
            component={RhinoCoin9}
          />
          <Route
            exact path ='/BoldBlueRhino'
            component={RhinoCoin10}
          />
          <Route
            exact path ='/PurplePassionRhino'
            component={RhinoCoin11}
          />
          <Route
            exact path ='/MarvelousMagesticMagentaRhino'
            component={RhinoCoin12}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
