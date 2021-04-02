import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import coin from '../assets/SPIFFYCOIN.gif'
import Coin1 from '../assets/FinalCoin2.gif'
import Coin2 from '../assets/FinalCoin10.gif'
import Coin3 from '../assets/FinalCoin9.gif'
import Coin4 from '../assets/FinalCoin8.gif'
import Coin5 from '../assets/FinalCoin7.gif'
import Coin6 from '../assets/FinalCoin6.gif'
import Coin7 from '../assets/FinalCoin5.gif'
import Coin8 from '../assets/FinalCoin4.gif'
import Coin9 from '../assets/FinalCoin3.gif'
import Coin10 from '../assets/silverback.gif'
import GreatApes from '../assets/GreatApes.gif'
import background from '../assets/background.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Home(){
    const Coin = (link, top, left, src) => {
        return(
            <Link
                    to={link}
                >
                    <div
                        css={{
                            height: '80%', 
                            width: '80%',
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
    return(
        <div
            css={{
                backgroundColor: '#4E6E58',
                position: 'relative', 
                height: '120vh', 
                width: '100vw'
            }}
        >
        <Nav></Nav>
        <h1
            css={{
                width: '100%',
                color: 'white',
                position: 'absolute',
                top: '20%',
                left: '50%',
                '-ms-transform': 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)',
                // whiteSpace: 'nowrap',
                fontSize: 'min(5vh, 40px)',

            }}
        >
            Latest Collection: Gorilla Coins
        </h1>
        
        <div
            css={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundColor: 'red',
                height: '50vh', 
                width: '90vw',
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
                
                {Coin('/ApeCoins', '50%', '50%', GreatApes)}

            </div>
            <div
                css={{
                    width: '100%',
                    position: 'absolute',
                    top: '125%',
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
    )
}