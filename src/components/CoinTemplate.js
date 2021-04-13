import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import {BrowserRouter as Router, Switch, Route, useParams, Link} from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin1(props){
    const {coin, title, link, backLink, backgroundImageBack, backgroundImageFront} = props

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
                            width: '47.5%',
                            top: '22.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            textDecoration: 'none',
                            fontSize: 'min(6vh, 45px)',
                            '&:hover':{
                                color: 'magenta',
                            },
                            color: 'white',
                            zIndex: 5,
                            backgroundColor: 'rgba(75,0,130, 0.7)',
        
                            // whiteSpace: 'nowrap'
                        }}
                        href={link}
                    >
                        {title}
                    </a>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageBack})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'red', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '36.5%',
                                left: '20%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageFront})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'green', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '79%',
                                left: '20%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageFront})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'blue', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '36.5%',
                                left: '82.5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageBack})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'yellow', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '79%',
                                left: '82.5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                // backgroundImage: `url(${backgroundImageBack})`,
                                // backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'black', 
                                height: '62.5vh',
                                width: '60vh',
                                position: 'absolute',
                                top: '61%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                            
        
        
                            }}
                    ></div>
                    <div
                        css={{
                            height: '50vh', 
                            width: '50vh',
                            position: 'absolute',
                            top: '55%',
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
                            bottom: '-12.5%',
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
                        position: 'relative', 
                        height: '110vh', 
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
                                left: '5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                height: '5vh', 
                                width: '5vh',
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
                            width: '80%',
                            top: '22.5%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            textDecoration: 'none',
                            fontSize: 'min(6vh, 45px)',
                            '&:hover':{
                                color: 'magenta',
                            },
                            color: 'white',
                            zIndex: 5,
                            backgroundColor: 'rgba(75,0,130, 0.7)',
        
                            // whiteSpace: 'nowrap'
                        }}
                        href={link}
                    >
                        {title}
                    </a>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageBack})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'red', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '36.5%',
                                left: '20%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageFront})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'green', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '79%',
                                left: '20%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageFront})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'blue', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '36.5%',
                                left: '82.5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                backgroundImage: `url(${backgroundImageBack})`,
                                backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                // backgroundColor: 'yellow', 
                                height: '42.5vh',
                                width: '45vh',
                                position: 'absolute',
                                top: '79%',
                                left: '82.5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                // zIndex: 5
        
        
                            }}
                    ></div>
                    <div
                            css={{
                                // backgroundImage: `url(${backgroundImageBack})`,
                                // backgroundSize: '42.5vh 42.5vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'black', 
                                height: '62.5vh',
                                width: '60vh',
                                position: 'absolute',
                                top: '61%',
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                            
        
        
                            }}
                    ></div>
                    <div
                        css={{
                            height: '50vh', 
                            width: '50vh',
                            position: 'absolute',
                            top: '55%',
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
                            bottom: '-11.25%',
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