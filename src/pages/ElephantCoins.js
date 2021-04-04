import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import ElephantCoin1 from '../assets/elephantfinal1.gif'
import ElephantCoin2 from '../assets/elephantfinal2.gif'
import ElephantCoin3 from '../assets/elephantfinal3.gif'
import ElephantCoin4 from '../assets/elephantfinal4.gif'
import ElephantCoin5 from '../assets/elephantfinal5.gif'
import ElephantCoin6 from '../assets/elephantfinal6.gif'
import ElephantCoin7 from '../assets/elephantfinal7.gif'
import ElephantCoin8 from '../assets/elephantfinal8.gif'
import ElephantCoin9 from '../assets/elephantfinal9.gif'
import ElephantCoin10 from '../assets/elephantfinal10.gif'
import ElephantCoin11 from '../assets/elephantfinal11.gif'

// import Coin10 from '../assets/silverback.gif'
import background from '../assets/background.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function ElephantCoins(){

        const Coin = (link, top, left, src) => {
            return(
             
                        <div
                            css={{
                                height: '40%', 
                                width: '20%',
                                position: 'absolute',
                                top: top,
                                left: left,
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <Link
                              to={link}
                            >
                            <LazyLoadImage
                                effect='blur'
                                src={src}
                                height='100%'
                            />
                            </Link>
                        </div>
               
            )
        }

        return(
            <div
                css={{
                    backgroundColor: '#4E6E58',
                    position: 'relative', 
                    height: '100vh', 
                    width: '100vw'
                }}
            >
                <Nav></Nav>
                <Link
                    to={'/'}
                >
                    <div
                        css={{
                            backgroundColor: '#7ADFBB',
                            position: 'absolute',
                            top: '20%',
                            left: '10%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            height: '5vh', 
                            width: '5vh',
                            borderRadius: '50%'
                        }}
                    >
                        <div
                            css={{
                                position: 'relative', 
                                height: '100%', 
                                width: '100%'
                            }}
                        >
                            <div
                                css={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '60%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    height: '20%', 
                                    width: '30%',
                                    backgroundColor: 'white'
                                }}
                            >
                            </div>
                            <div
                                css={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '35%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    width: 0,
                                    height: 0, 
                                    borderTop: '1vh solid transparent',
                                    borderBottom: '1vh solid transparent',
                                    borderRight: '1.5vh solid white',
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </Link>     
                <h1
                    css={{
                        color: 'white',
                        position: 'absolute',
                        top: '17.5%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        whiteSpace: 'nowrap',
                        fontSize: 'min(3.5vh, 35px)',
        
                    }}
                >
                    Elephant Coins
                </h1>
            
                <div
                    css={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: '100%',
                        // backgroundColor: 'red',
                        height: '25vh', 
                        width: '100vw',
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div
                        css={{
                            position: 'relative', 
                            height: '100%', 
                            width: '100%'
                        }}
                    >
                        {Coin('GreatGreenGrasslandsElephant', '25%', '10%', ElephantCoin1)}
                        {Coin('SherbertSunsetElephant', '25%', '26%', ElephantCoin2)}
                        {Coin('MagesticMagentaElephant', '25%', '42%', ElephantCoin3)}
                        {Coin('PinkPacifistElephant', '25%', '58%', ElephantCoin4)}
                        {Coin('GrayingGrayElephant', '25%', '74%', ElephantCoin5)}
                        {Coin('TinkeringTwilightElephant', '25%', '90%', ElephantCoin10)}

                        {Coin('ForestFunkElephant', '75%', '10%', ElephantCoin6)}
                        {Coin('PurplePassionElephant', '75%', '30%', ElephantCoin7)}
                        {Coin('NeonNerdElephant', '75%', '50%', ElephantCoin8)}
                        {Coin('SunnySavannaElephant', '75%', '70%', ElephantCoin9)}
                        {Coin('OGOrangeElephant', '75%', '90%', ElephantCoin11)}

                    </div>
                    {/* <div
                        css={{
                            width: '80%',
                            position: 'absolute',
                            top: '150%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            
                        }}
                    >
                        <div
                            css={{
                                fontSize: 'min(4vw, 20px)',
                                color: 'white',
                                textAlign: 'left'
        
                            }}
                        >
                            Every Gorilla coin will directly adopt one gorilla from the &nbsp;
                            <a 
                                css={{
                                    textDecoration: 'none',
                                    color: '#544B3D', 
                                }}
                                href='https://gorillafund.org/'>
                                Dian Fossey
                            </a> 
                            &nbsp; Gorilla fund, an organization that helps protect and maintain natural habitats, provide medical care and ensure the well being of great apes. You have the unique opportunity to own a one-of-a-kind Eco-Coin, while helping conserve our natural world.
                        </div>
                    </div> */}
                </div>
                <div
                        css={{
                            width: '100%',
                            position: 'absolute',
                            top: '85%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                        }}
                >
                    CHECK BACK SOON FOR NEW UPDATES
                </div>
                {/* <img
                    src={coin}
                    css={{
                        height: '50vh', 
                        width: '50vh',
                        position: 'absolute',
                                top: '50%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                    }}
                >
                </img> */}
                <div
                    css={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%'
                    }}
                >
                    <BottomNav></BottomNav>
                </div>
            </div>
    )
}