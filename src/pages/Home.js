import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'

import background from '../assets/background.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from 'react-responsive'

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Home(){
    const Coin = (link, top, left, src, height, width) => {
        return(
            <Link
                    to={link}
                >
                    <div
                        css={{
                            height: height, 
                            width: width,
                            position: 'absolute',
                            top: top,
                            left: left,
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <LazyLoadImage
                            effect='blur'
                            src={src}
                            height='100%'
                        />
                    </div>
            </Link>
        )
    }

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
                        backgroundColor: '#4E6E58',
                        position: 'relative', 
                        height: '180vh', 
                        width: '100vw'
                    }}
                >
                    <Nav></Nav>
                    <h1
                        css={{
                            width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '12.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',

                        }}
                    >
                        Latest Collections:
                    </h1>
                    {/* <h1
                        css={{
                            width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '22.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 40px)',

                        }}
                    >
                        <span
                        css={{
                            color: 'green'
                        }}
                        >
                            Gorilla Coins   
                        </span> and Elephant Coins
                    </h1> */}
                    
                    <div
                        css={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundColor: 'red',
                            height: '110vh', 
                            width: '95vw',
                            position: 'absolute',
                            top: '50%',
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
                            <Link
                                to={'/ApeCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '27.5%',
                                        left: '15%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'green',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Gorilla Coins
                                </div>
                            </Link>
                            <Link
                                to={'/ElephantCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '27.5%',
                                        left: '85%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Elephant Coins
                                </div>
                            </Link>
                            <Link
                                to={'/GiraffeCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '7.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'yellow',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Giraffe Coins
                                </div>
                            </Link>
                            <Link
                                to={'/RhinoCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '57.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'purple',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Rhino Coins
                                </div>
                            </Link>
                            {Coin('/ApeCoins', '50%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalGreatApes.gif', '20vw', '20vw')}
                            {Coin('/ElephantCoins', '50%', '85%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantsFinal1.gif', '20vw', '20vw')}
                            {Coin('/GiraffeCoins', '30%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinalgroup1.gif', '20vw', '20vw')}
                            {Coin('/RhinoCoins', '80%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinogroup1final.gif', '20vw', '20vw')}
                        </div>
                        <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '115%',
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
                            Follow our developing progress where we will highlight all of the adoptions and conservation efforts that have been achieved through the sale of eco-coins. We will acknowledge purchasers of eco-coins and highlight what was achieved through each sale. Thank you for your contribution as a steward of equality and opportunity for all creatures of this planet.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '95%',
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
                        backgroundColor: '#4E6E58',
                        position: 'relative', 
                        height: '220vh', 
                        width: '100vw'
                    }}
                >
                    <Nav></Nav>
                    <h1
                        css={{
                            width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '7.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',

                        }}
                    >
                        Latest Collections:
                    </h1>
                    {/* <h1
                        css={{
                            width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '22.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 40px)',

                        }}
                    >
                        <span
                        css={{
                            color: 'green'
                        }}
                        >
                            Gorilla Coins   
                        </span> and Elephant Coins
                    </h1> */}
                    
                    <div
                        css={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundColor: 'red',
                            height: '140vh', 
                            width: '90vw',
                            position: 'absolute',
                            top: '45%',
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
                            <Link
                                to={'/ApeCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '2.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'green',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Gorilla Coins
                                </div>
                            </Link>
                            <Link
                                to={'/ElephantCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '52.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Elephant Coins
                                </div>
                            </Link>
                            <Link
                                to={'/GiraffeCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '27.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'yellow',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Giraffe Coins
                                </div>
                            </Link>
                            <Link
                                to={'/RhinoCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '77.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'purple',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    Rhino Coins
                                </div>
                            </Link>
                            {Coin('/ApeCoins', '15%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalGreatApes.gif', '20vh', '20vh')}
                            {Coin('/ElephantCoins', '65%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantsFinal1.gif', '20vh', '20vh')}
                            {Coin('/GiraffeCoins', '40%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinalgroup1.gif', '20vh', '20vh')}
                            {Coin('/RhinoCoins', '90%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinogroup1final.gif', '20vh', '20vh')}
                        </div>
                        <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '115%',
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
                            Follow our developing progress where we will highlight all of the adoptions and conservation efforts that have been achieved through the sale of eco-coins. We will acknowledge purchasers of eco-coins and highlight what was achieved through each sale. Thank you for your contribution as a steward of equality and opportunity for all creatures of this planet.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '95%',
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
                            bottom: '-2.5%',
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