import React, { useState,  Suspense, lazy  } from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

function App() {

  const Home = lazy(() => import('./pages/Home'));
  const About = lazy(() => import('./pages/About'));
  const EcoCoins = lazy(() => import('./pages/EcoCoins'));
  const ApeCoins = lazy(() => import('./pages/Gorillas/ApeCoins'));
  const ElephantCoins = lazy(() => import('./pages/Elephants/ElephantCoins'));
  const GiraffeCoins = lazy(() => import('./pages/Giraffes/GiraffeCoins'));
  const RhinoCoins = lazy(() => import('./pages/Rhinos/RhinoCoins'));
  const Coin1 = lazy(() => import('./pages/Gorillas/Coin1'));
  const Coin2 = lazy(() => import('./pages/Gorillas/Coin2'));
  const Coin3 = lazy(() => import('./pages/Gorillas/Coin3'));
  const Coin4 = lazy(() => import('./pages/Gorillas/Coin4'));
  const Coin5 = lazy(() => import('./pages/Gorillas/Coin5'));
  const Coin6 = lazy(() => import('./pages/Gorillas/Coin6'));
  const Coin7 = lazy(() => import('./pages/Gorillas/Coin7'));
  const Coin8 = lazy(() => import('./pages/Gorillas/Coin8'));
  const Coin9 = lazy(() => import('./pages/Gorillas/Coin9'));
  const Coin10 = lazy(() => import('./pages/Gorillas/Coin10'));
  const ElephantCoin1 = lazy(() => import('./pages/Elephants/ElephantCoin1'));
  const ElephantCoin2 = lazy(() => import('./pages/Elephants/ElephantCoin2'));
  const ElephantCoin3 = lazy(() => import('./pages/Elephants/ElephantCoin3'));
  const ElephantCoin4 = lazy(() => import('./pages/Elephants/ElephantCoin4'));
  const ElephantCoin5 = lazy(() => import('./pages/Elephants/ElephantCoin5'));
  const ElephantCoin6 = lazy(() => import('./pages/Elephants/ElephantCoin6'));
  const ElephantCoin7 = lazy(() => import('./pages/Elephants/ElephantCoin7'));
  const ElephantCoin8 = lazy(() => import('./pages/Elephants/ElephantCoin8'));
  const ElephantCoin9 = lazy(() => import('./pages/Elephants/ElephantCoin9'));
  const ElephantCoin10 = lazy(() => import('./pages/Elephants/ElephantCoin10'));
  const ElephantCoin11 = lazy(() => import('./pages/Elephants/ElephantCoin11'));
  const GiraffeCoin1 = lazy(() => import('./pages/Giraffes/GiraffeCoin1'));
  const GiraffeCoin2 = lazy(() => import('./pages/Giraffes/GiraffeCoin2'));
  const GiraffeCoin3 = lazy(() => import('./pages/Giraffes/GiraffeCoin3'));
  const GiraffeCoin4 = lazy(() => import('./pages/Giraffes/GiraffeCoin4'));
  const GiraffeCoin5 = lazy(() => import('./pages/Giraffes/GiraffeCoin5'));
  const GiraffeCoin6 = lazy(() => import('./pages/Giraffes/GiraffeCoin6'));
  const GiraffeCoin7 = lazy(() => import('./pages/Giraffes/GiraffeCoin7'));
  const GiraffeCoin8 = lazy(() => import('./pages/Giraffes/GiraffeCoin8'));
  const GiraffeCoin9 = lazy(() => import('./pages/Giraffes/GiraffeCoin9'));
  const GiraffeCoin10 = lazy(() => import('./pages/Giraffes/GiraffeCoin10'));
  const GiraffeCoin11 = lazy(() => import('./pages/Giraffes/GiraffeCoin11'));
  const GiraffeCoin12 = lazy(() => import('./pages/Giraffes/GiraffeCoin12'));
  const RhinoCoin1 = lazy(() => import('./pages/Rhinos/RhinoCoin1'));
  const RhinoCoin2 = lazy(() => import('./pages/Rhinos/RhinoCoin2'));
  const RhinoCoin3 = lazy(() => import('./pages/Rhinos/RhinoCoin3'));
  const RhinoCoin4 = lazy(() => import('./pages/Rhinos/RhinoCoin4'));
  const RhinoCoin5 = lazy(() => import('./pages/Rhinos/RhinoCoin5'));
  const RhinoCoin6 = lazy(() => import('./pages/Rhinos/RhinoCoin6'));
  const RhinoCoin7 = lazy(() => import('./pages/Rhinos/RhinoCoin7'));
  const RhinoCoin8 = lazy(() => import('./pages/Rhinos/RhinoCoin8'));
  const RhinoCoin9 = lazy(() => import('./pages/Rhinos/RhinoCoin9'));
  const RhinoCoin10 = lazy(() => import('./pages/Rhinos/RhinoCoin10'));
  const RhinoCoin11 = lazy(() => import('./pages/Rhinos/RhinoCoin11'));
  const RhinoCoin12 = lazy(() => import('./pages/Rhinos/RhinoCoin12'));


  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>

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
              exact path ='/EcoCoins'
              component={EcoCoins}
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
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
