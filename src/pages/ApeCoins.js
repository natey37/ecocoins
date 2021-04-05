import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import background from '../assets/background.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function ApeCoins(){

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
                    Gorilla Coins
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
                        {Coin('BigBlueApe', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin1.gif')}
                        {Coin('FunkyVaporApe', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin2.gif')}
                        {Coin('GreatGreenApe', '25%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin3.gif')}
                        {Coin('GrapeApe', '25%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin4.gif')}
                        {Coin('MidnightApe', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin5.gif')}
                        {Coin('CrimsonApe', '75%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin6.gif')}
                        {Coin('CottonCandyApe', '75%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFInalCoin7.gif')}
                        {Coin('ProfessorPlumApe', '75%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin8.gif')}
                        {Coin('CherryBombApe', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin9.gif')}
                        {Coin('SilverBackApe', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin10.gif')}
                    </div>
                    <div
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
                    </div>
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