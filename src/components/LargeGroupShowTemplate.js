import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import background from '../assets/background.png'
import frame from '../assets/frame.png'

import Coin from './Coin'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import realbackbutton from '../assets/realbackbutton.png'
import BackButton from './BackButton'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function GroupShowTemplate(props){
        const {animal, coins, donationLink, donationName, donationBlurb, backgroundImage} = props
       
        const isDesktopOrLaptop = useMediaQuery({
            query: '(min-device-width: 1224px)'
        })
        const isTabletOrMobileDevice = useMediaQuery({
            query: '(max-device-width: 1224px)'
        })
        return(
            <>
            {isDesktopOrLaptop && 
                <div
                    css={{
                        // backgroundImage: `url(${backgroundImage})`,
                        // backgroundSize: '100%',
                        backgroundColor: '#4E6E58',
                        position: 'relative', 
                        height: '100vh', 
                        width: '100vw'
                    }}
                >
                    <Nav></Nav>
                    <BackButton
                        top={'7.5%'}
                        left={'5%'}
                    >

                    </BackButton>
                    {/* <Link
                        to={'/'}
                    >
                        <div
                            css={{
                                backgroundImage: `url(${realbackbutton})`,
                                backgroundSize: '10vh 10vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: '#7ADFBB',
                                position: 'absolute',
                                top: '7.5%',
                                left: '5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                height: '10vh', 
                                width: '10vh',
                                borderRadius: '50%',
                                zIndex: 10
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
                                        // backgroundColor: 'white'
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
                                        // borderTop: '1vh solid transparent',
                                        // borderBottom: '1vh solid transparent',
                                        // borderRight: '1.5vh solid white',
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    </Link>      */}
                    <h1
                        css={{
                            backgroundColor: 'rgba(75,0,130, 0.7)',
                            color: 'white',
                            position: 'absolute',
                            top: '35%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',
                            zIndex: 5,
                            width: '20%'
                        }}
                    >
                        {animal} Coins
                    </h1>
                    <div
                        css={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            // backgroundColor: 'red', 
                            height: '75vh',
                            width: '75vh',
                            position: 'absolute',
                            top: '52.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // zIndex: 5
    
    
                        }}
                    ></div>
                    <div
                        css={{
                            // backgroundImage: `url(${backgroundImage})`,
                            // backgroundSize: '100%',
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
                            <div
                                css={{
                                    backgroundColor: 'black', 
                                    borderRadius: '5%',
                                    // boxShadow: '5px 5px #171717',
                                    border: '4px solid rgba(75,0,130, 0.5)',
                                    height:'200%', 
                                    width: '32.5%',
                                    position: 'absolute',
                                    top: '60%',
                                    left: '20%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                            </div>
                            <div
                                css={{
                                    backgroundColor: 'black', 
                                    borderRadius: '5%',
                                    // boxShadow: '5px 5px #171717',
                                    border: '4px solid purple',
                                    height: '200%', 
                                    width: '32.5%',
                                    position: 'absolute',
                                    top: '60%',
                                    left: '80%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
    
                            </div>
                            {coins.map((coin) => coin)}
    
                        </div>
                        <div
                            css={{
                                width: '80%',
                                position: 'absolute',
                                top: '200%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
                            }}
                        >
                            <div
                                css={{
                                    fontSize: 'min(4vw, 20px)',
                                    color: 'white',
                                    textAlign: 'left'
            
                                }}
                            >
                                Every {animal} coin will directly adopt one {animal} from the &nbsp;
                                <a 
                                    css={{
                                        textDecoration: 'none',
                                        color: 'yellow', 
                                    }}
                                    href={donationLink}>
                                    {donationName}
                                </a> 
                                &nbsp;, {donationBlurb}. You have the unique opportunity to own a one-of-a-kind Eco-Coin, while helping conserve our natural world.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                // width: '100%',
                                position: 'absolute',
                                top: '90%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
                                color: 'white'
                            }}
                    >
                        CHECK BACK SOON FOR NEW UPDATES
                    </div>
                    <div
                        css={{
                            position: 'absolute',
                            bottom: '-5%',
                            width: '100%'
                        }}
                    >
                        <BottomNav></BottomNav>
                    </div>
                </div>
            }
            {isTabletOrMobileDevice && 
                <div
                    css={{
                        // backgroundImage: `url(${backgroundImage})`,
                        // backgroundSize: '100%',
                        backgroundColor: '#4E6E58',
                        position: 'relative', 
                        height: '120vh', 
                        width: '100vw'
                    }}
                >
                    <Nav></Nav>
                    <BackButton
                        top={'6%'}
                        left={isDesktopOrLaptop ? '5%' : '10%'}
                    >

                    </BackButton>
                    {/* <Link
                        to={'/'}
                    >
                        <div
                            css={{
                                backgroundImage: `url(${realbackbutton})`,
                                backgroundSize: '5vh 5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: '#7ADFBB',
                                position: 'absolute',
                                top: '17.5%',
                                left: '5%',
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
                    </Link>      */}
                    <h1
                        css={{
                            backgroundColor: 'rgba(75,0,130, 0.7)',
                            color: 'white',
                            position: 'absolute',
                            top: '15%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',
                            // zIndex: 5,
                            // width: '20%'
                        }}
                    >
                        {animal} Coins
                    </h1>
                    <div
                        css={{
                            backgroundImage: `url(${backgroundImage})`,
                            backgroundSize: 'cover',
                            // backgroundColor: 'red', 
                            height: '50vh',
                            width: '50vh',
                            position: 'absolute',
                            top: '65%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // zIndex: 5
    
    
                        }}
                    ></div>
                    <div
                        css={{
                            // backgroundImage: `url(${backgroundImage})`,
                            // backgroundSize: '100%',
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
                            <div
                                css={{
                                    backgroundColor: 'black', 
                                    borderRadius: '5%',
                                    // boxShadow: '5px 5px #171717',
                                    border: '4px solid rgba(75,0,130, 0.5)',
                                    height: '200%', 
                                    width: '45%',
                                    position: 'absolute',
                                    top: '70%',
                                    left: '25%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                            </div>
                            <div
                                css={{
                                    backgroundColor: 'black', 
                                    borderRadius: '5%',
                                    // boxShadow: '5px 5px #171717',
                                    border: '4px solid rgba(75,0,130, 0.5)',
                                    height: '200%', 
                                    width: '45%',
                                    position: 'absolute',
                                    top: '70%',
                                    left: '75%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
    
                            </div>
                            {coins.map((coin) => coin)}
    
                        </div>
                        <div
                            css={{
                                width: '80%',
                                position: 'absolute',
                                top: '235%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
                            }}
                        >
                            <div
                                css={{
                                    fontSize: 'min(4vw, 20px)',
                                    color: 'white',
                                    textAlign: 'left'
            
                                }}
                            >
                                Every {animal} coin will directly adopt one {animal} from the &nbsp;
                                <a 
                                    css={{
                                        textDecoration: 'none',
                                        color: 'yellow', 
                                    }}
                                    href={donationLink}>
                                    {donationName}
                                </a> 
                                &nbsp;, {donationBlurb}. You have the unique opportunity to own a one-of-a-kind Eco-Coin, while helping conserve our natural world.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '92.5%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
                                color: 'white'
                            }}
                    >
                        CHECK BACK SOON FOR NEW UPDATES
                    </div>
                    <div
                        css={{
                            position: 'absolute',
                            bottom: '-5%',
                            width: '100%'
                        }}
                    >
                        <BottomNav></BottomNav>
                    </div>
                </div>
            }
            </>
    )
}