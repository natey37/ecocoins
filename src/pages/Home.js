import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'

import background from '../assets/background.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from 'react-responsive'

import {Link} from 'react-router-dom'

import Gorilla1 from '../assets/gorilla1.png'
import Gorilla2 from '../assets/gorilla2.png'
import Gorilla3 from '../assets/gorilla3.png'
import Gorilla4 from '../assets/gorilla4.png'
import Gorilla5 from '../assets/gorilla5.png'
import Gorilla6 from '../assets/gorilla6.png'
import Gorilla7 from '../assets/gorilla7.png'
import Gorilla8 from '../assets/gorilla8.png'
import Gorilla9 from '../assets/gorilla9.png'
import Gorilla10 from '../assets/gorilla10.png'
import Elephant1 from '../assets/elephant1.png'
import Elephant2 from '../assets/elephant2.png'
import Elephant3 from '../assets/elephant3.png'
import Elephant4 from '../assets/elephant4.png'
import Elephant5 from '../assets/elephant5.png'
import Elephant6 from '../assets/elephant6.png'
import Elephant7 from '../assets/elephant7.png'
import Elephant8 from '../assets/elephant8.png'
import Elephant9 from '../assets/elephant9.png'
import Elephant10 from '../assets/elephant10.png'
import Elephant11 from '../assets/elephant11.png'
import Giraffe1 from '../assets/giraffe1.png'
import Giraffe2 from '../assets/giraffe2.png'
import Giraffe3 from '../assets/giraffe3.png'
import Giraffe4 from '../assets/giraffe4.png'
import Giraffe5 from '../assets/giraffe5.png'
import Giraffe6 from '../assets/giraffe6.png'
import Giraffe7 from '../assets/giraffe7.png'
import Giraffe8 from '../assets/giraffe8.png'
import Giraffe9 from '../assets/giraffe9.png'
import Giraffe10 from '../assets/giraffe10.png'
import Giraffe11 from '../assets/giraffe11.png'
import Giraffe12 from '../assets/giraffe12.png'
import Rhino1 from '../assets/rhino1.png'
import Rhino2 from '../assets/rhino2.png'
import Rhino3 from '../assets/rhino3.png'
import Rhino4 from '../assets/rhino4.png'
import Rhino5 from '../assets/rhino5.png'
import Rhino6 from '../assets/rhino6.png'
import Rhino7 from '../assets/rhino7.png'
import Rhino8 from '../assets/rhino8.png'
import Rhino9 from '../assets/rhino9.png'
import Rhino10 from '../assets/rhino10.png'
import Rhino11 from '../assets/rhino11.png'
import Rhino12 from '../assets/rhino12.png'
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
                            backgroundColor: 'black',
                            height: '40vh', 
                            width: '40vh',
                            position: 'absolute',
                            top: top,
                            left: left,
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                    </div>
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

    const backgroundCoin = (image, top, left) => {
        return( <div
                    css={{
                        height: '30vh', 
                        width: '30vh',
                        backgroundImage: `url(${image})`,
                        backgroundSize: '100%',
                        position: 'absolute',
                        top: top,
                        left: left,
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >

                </div>)
    }

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    });


    return(
        <>
            {isDesktopOrLaptop && 
                <div
                    css={{
                        backgroundColor: '#4E6E58',
                        position: 'relative', 
                        height: '180vh', 
                        width: '100vw',
                        // overflow: 'hidden'
                    }}
                >
                    <Nav></Nav>
                    <h1
                        css={{
                            // width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '12.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',
                            zIndex: 5,
                            backgroundColor: 'rgba(75,0,130, 0.7)',

                        }}
                    >
                        Latest Collections:
                    </h1>
                    <div
                        css={{
                            // backgroundColor: 'red',
                            height: '100%', 
                            width: '100vw',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            overflow: 'hidden'
                        }}
                    >
                        {backgroundCoin(Gorilla1, '7.5%', '0%')}
                        {backgroundCoin(Elephant1, '7.5%', '24%')}
                        {backgroundCoin(Rhino1, '7.5%', '48%')}
                        {backgroundCoin(Giraffe1, '7.5%', '72%')}
                        {backgroundCoin(Gorilla2, '7.5%', '96%')}
                        {backgroundCoin(Elephant2, '22.5%', '12%')}
                        {backgroundCoin(Rhino2, '22.5%', '36%')}
                        {backgroundCoin(Giraffe2, '22.5%', '60%')}
                        {backgroundCoin(Gorilla3, '22.5%', '84%')}
                        {backgroundCoin(Elephant3, '22.5%', '108%')}
                        {backgroundCoin(Rhino3, '37.5%', '0%')}
                        {backgroundCoin(Giraffe3, '37.5%', '24%')}
                        {backgroundCoin(Gorilla4, '37.5%', '48%')}
                        {backgroundCoin(Elephant4, '37.5%', '72%')}
                        {backgroundCoin(Rhino4, '37.5%', '96%')}
                        {backgroundCoin(Giraffe4, '52.5%', '12%')}
                        {backgroundCoin(Gorilla5, '52.5%', '36%')}
                        {backgroundCoin(Elephant5, '52.5%', '60%')}
                        {backgroundCoin(Rhino5, '52.5%', '84%')}
                        {backgroundCoin(Giraffe5, '52.5%', '108%')}
                        {backgroundCoin(Gorilla6, '67.5%', '0%')}
                        {backgroundCoin(Elephant6, '67.5%', '24%')}
                        {backgroundCoin(Rhino6, '67.5%', '48%')}
                        {backgroundCoin(Giraffe6, '67.5%', '72%')}
                        {backgroundCoin(Gorilla7, '67.5%', '96%')}
                        {backgroundCoin(Elephant7, '82.5%', '12%')}
                        {backgroundCoin(Rhino7, '82.5%', '36%')}
                        {backgroundCoin(Giraffe7, '82.5%', '60%')}
                        {backgroundCoin(Gorilla8, '82.5%', '84%')}
                        {backgroundCoin(Elephant8, '82.5%', '108%')}
                        {backgroundCoin(Rhino8, '97.5%', '0%')}
                        {backgroundCoin(Giraffe8, '97.5%', '24%')}
                        {backgroundCoin(Gorilla9, '97.5%', '48%')}
                        {backgroundCoin(Elephant9, '97.5%', '72%')}
                        {backgroundCoin(Rhino9, '97.5%', '96%')}
                    </div>
                    
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
                            // backgroundImage: `url(${background})`,
                            // backgroundSize: 'cover',
                            // backgroundColor: 'black',
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
                                        top: '35%',
                                        left: '15%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'green',
                                        fontWeight: 'bold',
                                        backgroundColor: 'black',
                                        zIndex: 2
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
                                        top: '35%',
                                        left: '85%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        backgroundColor: 'black',
                                        zIndex: 2
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
                                        top: '5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'yellow',
                                        fontWeight: 'bold',
                                        backgroundColor: 'black',
                                        zIndex: 2

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
                                        top: '75%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'purple',
                                        fontWeight: 'bold',
                                        backgroundColor: 'black',
                                        zIndex: 2
                                    }}
                                >
                                    Rhino Coins
                                </div>
                            </Link>
                            <Link
                                to={'/TigerCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '40%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 40px)',
                                        color: 'orange',
                                        fontWeight: 'bold',
                                        backgroundColor: 'black',
                                        zIndex: 2
                                    }}
                                >
                                    Tiger Coins
                                </div>
                            </Link>
                            {Coin('/ApeCoins', '50%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalGreatApes.gif', '15vw', '15vw')}
                            {Coin('/ElephantCoins', '50%', '85%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantsFinal1.gif', '15vw', '15vw')}
                            {Coin('/GiraffeCoins', '20%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinalgroup1.gif', '15vw', '15vw')}
                            {Coin('/RhinoCoins', '90%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinogroup1final.gif', '15vw', '15vw')}
                            {Coin('/TigerCoins', '55%', '50%', 'https://i.imgur.com/IRgRrgf.gif', '15vw', '15vw')}
                        </div>
                        <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '117.5%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                
                            }}
                        >
                            <div
                                css={{
                                    fontSize: 'min(4vw, 20px)',
                                    color: 'white',
                                    textAlign: 'left',
                                    backgroundColor: 'rgba(75,0,130, 0.7)',

                                }}
                            >
                            Follow our developing progress where we will highlight all of the adoptions and conservation efforts that have been achieved through the sale of eco-coins. We will acknowledge purchasers of eco-coins and highlight what was achieved through each sale. Thank you for your contribution as a steward of equality and opportunity for all creatures of this planet.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                color: 'white',
                                // width: '50%',
                                position: 'absolute',
                                top: '95%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
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
                        height: '270vh', 
                        width: '100vw'
                    }}
                >
                    <Nav></Nav>
                    <h1
                        css={{
                            // width: '100%',
                            color: 'white',
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // whiteSpace: 'nowrap',
                            fontSize: 'min(6vh, 50px)',
                            backgroundColor: 'rgba(75,0,130, 0.7)',
                            zIndex: 2
                        }}
                    >
                        Latest Collections:
                    </h1>
                    <div
                        css={{
                            // backgroundColor: 'red',
                            height: '100%', 
                            width: '100vw',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            overflow: 'hidden'
                        }}
                    >
                        {backgroundCoin(Gorilla1, '7.5%', '0%')}
                        {backgroundCoin(Elephant1, '7.5%', '24%')}
                        {backgroundCoin(Rhino1, '7.5%', '48%')}
                        {backgroundCoin(Giraffe1, '7.5%', '72%')}
                        {backgroundCoin(Gorilla2, '7.5%', '96%')}
                        {backgroundCoin(Elephant2, '22.5%', '12%')}
                        {backgroundCoin(Rhino2, '22.5%', '36%')}
                        {backgroundCoin(Giraffe2, '22.5%', '60%')}
                        {backgroundCoin(Gorilla3, '22.5%', '84%')}
                        {backgroundCoin(Elephant3, '22.5%', '108%')}
                        {backgroundCoin(Rhino3, '37.5%', '0%')}
                        {backgroundCoin(Giraffe3, '37.5%', '24%')}
                        {backgroundCoin(Gorilla4, '37.5%', '48%')}
                        {backgroundCoin(Elephant4, '37.5%', '72%')}
                        {backgroundCoin(Rhino4, '37.5%', '96%')}
                        {backgroundCoin(Giraffe4, '52.5%', '12%')}
                        {backgroundCoin(Gorilla5, '52.5%', '36%')}
                        {backgroundCoin(Elephant5, '52.5%', '60%')}
                        {backgroundCoin(Rhino5, '52.5%', '84%')}
                        {backgroundCoin(Giraffe5, '52.5%', '108%')}
                        {backgroundCoin(Gorilla6, '67.5%', '0%')}
                        {backgroundCoin(Elephant6, '67.5%', '24%')}
                        {backgroundCoin(Rhino6, '67.5%', '48%')}
                        {backgroundCoin(Giraffe6, '67.5%', '72%')}
                        {backgroundCoin(Gorilla7, '67.5%', '96%')}
                        {backgroundCoin(Elephant7, '82.5%', '12%')}
                        {backgroundCoin(Rhino7, '82.5%', '36%')}
                        {backgroundCoin(Giraffe7, '82.5%', '60%')}
                        {backgroundCoin(Gorilla8, '82.5%', '84%')}
                        {backgroundCoin(Elephant8, '82.5%', '108%')}
                        {backgroundCoin(Rhino8, '97.5%', '0%')}
                        {backgroundCoin(Giraffe8, '97.5%', '24%')}
                        {backgroundCoin(Gorilla9, '97.5%', '48%')}
                        {backgroundCoin(Elephant9, '97.5%', '72%')}
                        {backgroundCoin(Rhino9, '97.5%', '96%')}
                    </div>
                    
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
                            // backgroundImage: `url(${background})`,
                            // backgroundSize: 'cover',
                            // backgroundColor: 'red',
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
                                        top: '4%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'green',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
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
                                        top: '53%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'blue',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
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
                                        top: '28%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'yellow',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
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
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
                                    }}
                                >
                                    Rhino Coins
                                </div>
                            </Link>
                            <Link
                                to={'/TigerCoins'}
                            >
                                <div
                                    css={{
                                        position: 'absolute',
                                        top: '102.5%',
                                        left: '50%',
                                        '-ms-transform': 'translate(-50%, -50%)',
                                        transform: 'translate(-50%, -50%)',
                                        fontSize: 'min(5vh, 32px)',
                                        color: 'orange',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        zIndex: 2
                                    }}
                                >
                                    Tiger Coins
                                </div>
                            </Link>
                            {Coin('/ApeCoins', '15%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalGreatApes.gif', '20vh', '20vh')}
                            {Coin('/ElephantCoins', '65%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantsFinal1.gif', '20vh', '20vh')}
                            {Coin('/GiraffeCoins', '40%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinalgroup1.gif', '20vh', '20vh')}
                            {Coin('/RhinoCoins', '90%', '50%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinogroup1final.gif', '20vh', '20vh')}
                            {Coin('/TigerCoins', '115%', '50%', 'https://i.imgur.com/IRgRrgf.gif', '40vw', '40vw')}
                        </div>
                        <div
                            css={{
                                width: '100%',
                                position: 'absolute',
                                top: '137.5%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                
                            }}
                        >
                            <div
                                css={{
                                    fontSize: 'min(4vw, 20px)',
                                    color: 'white',
                                    textAlign: 'left',
                                    backgroundColor: 'rgba(75,0,130, 0.7)',
                                }}
                            >
                            Follow our developing progress where we will highlight all of the adoptions and conservation efforts that have been achieved through the sale of eco-coins. We will acknowledge purchasers of eco-coins and highlight what was achieved through each sale. Thank you for your contribution as a steward of equality and opportunity for all creatures of this planet.
                            </div>
                        </div>
                    </div>
                    <div
                            css={{
                                // width: '100%',
                                position: 'absolute',
                                top: '96%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(75,0,130, 0.7)',
                                color: 'white'
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