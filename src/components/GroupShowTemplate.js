import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import background from '../assets/background.png'
import Coin from './Coin'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function GroupShowTemplate(props){
        const {animal} = props
        // const Coin = (link, top, left, src) => {
        //     return(
             
        //                 <div
        //                     css={{
        //                         height: '40%', 
        //                         width: '20%',
        //                         position: 'absolute',
        //                         top: top,
        //                         left: left,
        //                         '-ms-transform': 'translate(-50%, -50%)',
        //                         transform: 'translate(-50%, -50%)',
        //                     }}
        //                 >
        //                     <Link
        //                       to={link}
        //                     >
        //                     <LazyLoadImage
        //                         effect='blur'
        //                         src={src}
        //                         height='100%'
        //                     />
        //                     </Link>
        //                 </div>
               
        //     )
        // }

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
                    {animal} Coins
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
                        {/* {Coin('GreatGreenGrasslandsElephant', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal1.gif')}
                        {Coin('SherbertSunsetElephant', '25%', '26%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif')}
                        {Coin('MagesticMagentaElephant', '25%', '42%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal3.gif')}
                        {Coin('PinkPacifistElephant', '25%', '58%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal4.gif')}
                        {Coin('GrayingGrayElephant', '25%', '74%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal5.gif')}
                        {Coin('SunnySavannaElephant', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal10.gif')}
                        
                        {Coin('TinkeringTwilightElephant', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal6.gif')}
                        {Coin('ForestFunkElephant', '75%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal7.gif')}
                        {Coin('PurplePassionElephant', '75%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal8.gif')}
                        {Coin('NeonNerdElephant', '75%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif')}
                        {Coin('OGOrangeElephant', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal11.gif')} */}

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
                            Every Elephant coin will directly adopt one elephant from the &nbsp;
                            <a 
                                css={{
                                    textDecoration: 'none',
                                    color: '#544B3D', 
                                }}
                                href='https://www.sheldrickwildlifetrust.org/orphans'>
                                Sheldrik Wildlife Trust
                            </a> 
                            &nbsp;, an organization that exists to protect Africa’s wildlife and to preserve habitats for the future of all wild species. You have the unique opportunity to own a one-of-a-kind Eco-Coin, while helping conserve our natural world.
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