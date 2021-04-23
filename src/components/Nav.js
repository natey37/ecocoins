import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import dropdown from '../assets/dropdown.png'
import dropdownup from '../assets/dropdownup.png'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'

export default function Nav(props){
    const [dropdownClicked, setDropdownClick] = useState(false)
    const makeDropdownBox = (top, text, color, link) => {
        return(
            <Link
                to={link}
            >
                <div
                    css={{
                        backgroundColor: color,
                        height: '10%', 
                        width: '100%',
                        border: '1px solid black',
                        position: 'absolute',
                        top: top,
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        ':hover' : {
                            backgroundColor: '#4E6E58',
                            color: 'white'
                        },
                        // zIndex: 50
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
                                left: '50%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                fontWeight: 'bold',
                                fontSize: 'min(3vh, 13px)',
                            }}
                        >
                            {text}
                        </div>
                    </div>
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
        
                <div
                    css={{
                        height: '15vh', 
                        position: 'relative',
                        backgroundColor: '#A6ECE0',
                        zIndex: 5
                    }}
                >   
                    <div
                        // onClick={() => setSwing(!swing)}
                        // className={swing ? 'swingKraze' : ''}
                        css={{
                            // border: 'solid yellow',
                            // borderWidth: '0px 10px',
                            // backgroundColor: 'yellow',
                            // color: 'green',
                            // fontSize: 'min(6vh, 70px)', 
                            margin: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            '&:hover':{
                                color: 'magenta',
                            }, 
                            whiteSpace: 'nowrap',
                            
                            
                        }}
                    >   
                        <Link
                            to={'/'}
                        >
                            <img
                                src={logo}
                                css={{
                                    height: '100%', 
                                    width: '100%'
                                }}
                            ></img>
                        </Link>
                    </div>
                    {!dropdownClicked ? 
                        <div
                            onClick={() => setDropdownClick(!dropdownClicked)}
                            css={{
                                backgroundImage: `url(${dropdown})`,
                                backgroundSize: '10vh 10vh',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '50%',
                                left: isDesktopOrLaptop ? '95%' : '90%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                height: '10vh',
                                width: '10vh'
                            }}
                        >
                        </div>
                    :
                        <div
                            onClick={() => setDropdownClick(!dropdownClicked)}
                            css={{
                                backgroundImage: `url(${dropdownup})`,
                                backgroundSize: '10vh 10vh',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '50%',
                                left: isDesktopOrLaptop ? '95%' : '90%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                height: '10vh',
                                width: '10vh'
                            }}
                        >
                        </div>
                    }
                    {dropdownClicked && 
                        <div
                            css={{
                                // backgroundColor: '#A6ECE0',
                                position: 'absolute',
                                top: '285.5%',
                                left: isDesktopOrLaptop ? '94.5%' : '81.5%',
                                '-ms-transform': 'translate(-50%, -50%)',
                                transform: 'translate(-50%, -50%)',
                                height: '50vh',
                                width: '20vh'
                            }}
                        >
                            <div
                                css={{
                                    position: 'relative', 
                                    height: '100%', 
                                    width: '100%'
                                }}
                            >
                                {/* <div
                                    css={{
                                        height: '10%', 
                                        width: '100%',
                                        border: '2px solid black',
                                        position: 'absolute',
                                        top: '5%',
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
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                '-ms-transform': 'translate(-50%, -50%)',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            About
                                        </div>
                                    </div>
                                </div> */}
                                {makeDropdownBox('-5%', 'Home', '#7ADFBB', '/')}
                                {makeDropdownBox('5%', 'All Coins', '#7ADFBB', '/EcoCoins')}
                                {makeDropdownBox('15%', 'About', '#7ADFBB', '/About')}
                                {makeDropdownBox('25%', 'Gorillas', 'magenta', '/ApeCoins')}
                                {makeDropdownBox('35%', 'Elephants', 'magenta', '/ElephantCoins')}
                                {makeDropdownBox('45%', 'Giraffes', 'magenta', 'GiraffeCoins')}
                                {makeDropdownBox('55%', 'Rhinos', 'magenta', '/RhinoCoins')}
                                {makeDropdownBox('65%', 'Tigers', 'magenta', '/TigerCoins')}





                            </div>
                        </div>
                    }
                    
                </div>
            
          
        </>
    )
}