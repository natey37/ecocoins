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

import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Home(){

    return(
        <div
            css={{
                position: 'relative', 
                height: '100vh', 
                width: '100vw'
            }}
        >
        <Nav></Nav>
        <h1>THIS IS ECO COINS</h1>
        
        <div
            css={{
                // backgroundColor: 'red',
                height: '50vh', 
                width: '70vw',
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
                    to={'/BigBlueApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '15%',
                        left: '10%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin1}
                >
                </img>
                </Link>
                <Link
                    to={'/FunkyVaporApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '15%',
                        left: '30%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin2}
                >
                </img>
                </Link>
                <Link
                    to={'/GreatGreenApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '15%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin3}
                >
                </img>
                </Link>
                <Link
                    to={'/GrapeApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '15%',
                        left: '70%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin4}
                >
                </img>
                </Link>
                <Link
                    to={'/MidnightApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '15%',
                        left: '90%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin5}
                >
                </img>
                </Link>
                <Link
                    to={'/CrimsonApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '50%',
                        left: '10%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin6}
                >
                </img>
                </Link>
                <Link
                    to={'/CottonCandyApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '50%',
                        left: '30%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin7}
                >
                </img>
                </Link>
                <Link
                    to={'/ProfessorPlumApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin8}
                >
                </img>
                </Link>
                <Link
                    to={'/CherryBombApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '50%',
                        left: '70%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin9}
                >
                </img>
                </Link>
                <Link
                    to={'/SilverBackApe'}
                >
                <img
                    css={{
                        height: '15vh', 
                        width: '15vh',
                        position: 'absolute',
                        top: '50%',
                        left: '90%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                    src={Coin10}
                >
                </img>
                </Link>
            </div>
            <div
                css={{
                    width: '100%',
                    position: 'absolute',
                    top: '90%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <h4>Our mission at Eco-Coins is to help endangered animals through the sale of limited edition digital coins. Eco-Coins are meant to spread awareness about the growing problems of species extinction and contribute towards habitat restoration and the protection of these amazing animals.Follow our developing Eco Zoo that will highlight all of the adoptions and conservation efforts that have been achieved through the sale of Eco-Coins</h4>
            </div>
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