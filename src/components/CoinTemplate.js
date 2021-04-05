import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import {BrowserRouter as Router, Switch, Route, useParams, Link} from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin1(props){
    const {coin, title, link, backLink} = props
    return(
        <div
            css={{
                position: 'relative', 
                height: '100vh', 
                width: '100vw',
                backgroundColor: '#4C8577'
            }}
        >
            <Nav></Nav>
            <Link
                to={backLink}
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
            <a 
                css={{
                    position: 'absolute',
                    width: '60%',
                    top: '20%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    textDecoration: 'none',
                    fontSize: 'min(8vw, 50px)',
                    '&:hover':{
                        color: 'magenta',
                    },
                    whiteSpace: 'nowrap'
                }}
                href={link}
            >
                {title}
            </a>
            
            <div
                css={{
                    height: '50vh', 
                    width: '50vh',
                    position: 'absolute',
                    top: '52.5%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <LazyLoadImage
                    effect='blur'
                    src={coin}
                    height='100%'
                />
             </div>
            {/* <img
                src={coin}
                css={{
                    height: '50vh', 
                    width: '50vh',
                    position: 'absolute',
                    top: '52.5%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                }}
            >
            </img> */}

            <h3
                css={{
                    position: 'absolute',
                    top: '80%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    color: '#544B3D'
                }}
            >
                Sponsored by: 
            </h3>
            <h2
                css={{
                    fontStyle: 'italic',
                    position: 'absolute',
                    top: '85%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    color: 'white'
                }}
            >Your name here...</h2>
            <div
                css={{
                    position: 'absolute',
                    bottom: '-10%',
                    width: '100%'
                }}
            >
                <BottomNav></BottomNav>
            </div>
        </div>
    )
}