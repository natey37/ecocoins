import HeadersTemplate from '../components/HeadersTemplate'
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
import {Link} from 'react-router-dom'
import BackButton from '../components/BackButton'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'


export default function EcoCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    const coinIcon = (title, topIcon, leftIcon, topTitle, leftTitle, iconImage, link, saved) => {
        return(
            <a 
                href={link}
            >
                <div>
                    {/* <div
                        css={{
                            height: '8vh', 
                            width: '8vh',
                            position: 'absolute',
                            top:  topIcon,
                            left: leftIcon,
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'gold',
                        }}
                    >
                    </div> */}
                    <div
                        css={{
                            // border: '2px solid gold',
                            backgroundImage: `url(${iconImage})`,
                            backgroundSize: '100%',
                            height: isDesktopOrLaptop ? '7vh' : '4.5vh',
                            width: isDesktopOrLaptop ? '7vh' : '4.5vh',
                            position: 'absolute',
                            top:  topIcon,
                            left: leftIcon,
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: 'black',
                            '&:hover':{
                                backgroundColor: saved ? 'green' : 'red'
                            },
                        }}
                    >
                    </div>
                    <div
                        css={{
                            position: 'absolute',
                            top: topTitle,
                            left: leftTitle,
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            fontSize: isDesktopOrLaptop ? 'min(2.5vh, 9px)' : 'min(2vh, 6px)',
                            width: '10%',
                            '&:hover':{
                                color: saved ? 'green' : 'red',
                            },
                            // zIndex: 10
                            // whiteSpace: 'nowrap'
                        }}
                    >
                        {title}
                    </div>
                </div>
            </a>
        )
    }
    return(
        <div>
            <HeadersTemplate bottom={'-80%'}>
                {/* <div
                    css={{
                        width: '100%',
                        fontSize: 'min(6vh, 50px)',
                        position: 'absolute',
                        top: '22.5%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    Gotta Save 'Em All
                </div> */}
                <BackButton
                    top={isDesktopOrLaptop ? '22.5%' : '7.5%'}
                    left={isDesktopOrLaptop ? '2.5%' : '10%'}
                ></BackButton>
                 
                <div
                    css={{
                        width: isDesktopOrLaptop ? '90%' : '95%', 
                        height: '60%',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'black',
                        border: '3px solid yellow',
                        borderWidth: '3px 3px 0px 3px',
                        overflow: 'visible'
                    }}
                >
                    <div
                        css={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            fontSize: isDesktopOrLaptop ? 'min(9vh, 75px)' : 'min(4vh, 40px)' ,
                        }}
                    >
                        EcoCoins
                    </div>
                    <div
                        css={{
                            height: '7vh', 
                            width: '7vh',
                            position: 'absolute',
                            top: '10%',
                            left: '5%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            // backgroundColor: 'white',
                        }}
                    >

                    </div>
                   
                    {coinIcon('G1 - Big Blue', '10%', '5%', isDesktopOrLaptop ? '18%' : '17.5%', '5%', Gorilla1, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717429730847490049')}
                    {coinIcon('G2 - Funky Vapor', '10%', '16.25%', isDesktopOrLaptop ? '18%' : '17.5%', '16.25%', Gorilla2, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717430830359117825')}
                    {coinIcon('G3 - Great Green', '10%', '27.5%', isDesktopOrLaptop ? '18%' : '17.5%', '27.5%', Gorilla3, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717431929870745601')}
                    {coinIcon('G4 - Grape', '10%', '72.5%', isDesktopOrLaptop ? '18%' : '16%', '72.5%', Gorilla4, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717433029382373377')}
                    {coinIcon('G5 - Midnight', '10%', '83.75%', isDesktopOrLaptop ? '18%' : '16%', '83.75%', Gorilla5, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717434128894001153')}
                    {coinIcon('G6 - Crimson', '10%', '95%', isDesktopOrLaptop ? '18%' : '16%', '95%', Gorilla6, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717435228405628929')}
                    {coinIcon('G7 - Cotton Candy', '27.5%', '5%', isDesktopOrLaptop ? '36.75%' : '35%', '5%', Gorilla7, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717436327917256705')}
                    {coinIcon('G8 - Professor Plum', '27.5%', '16.25%', isDesktopOrLaptop ? '36.75%' : '35%', '16.25%', Gorilla9, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717437427428884481' )}
                    {coinIcon('G9 - Cherry Bomb', '27.5%', '27.5%', isDesktopOrLaptop ? '36.75%' : '35%', '27.5%', Gorilla8,'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717438526940512257' )}
                    {coinIcon('G10 - Silver Back', '27.5%', '38.75%', isDesktopOrLaptop ? '36.75%' : '35%', '38.75%', Gorilla10, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717439626452140033')}
                    {coinIcon('E1 - Great Green GrassLands', '27.5%', '50%', isDesktopOrLaptop ? '36.75%' : '36.25%', '50%', Elephant1, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717440725963767809')}
                    {coinIcon('E2 - Sherbert Sunset', '27.5%', '61.25%', isDesktopOrLaptop ? '36.75%' : '35%', '61.25%', Elephant2, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717441825475395585')}
                    {coinIcon('E3 - Magestic Magenta', '27.5%', '72.5%', isDesktopOrLaptop ? '36.75%' : '35%', '72.5%', Elephant3, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717442924987023361')}
                    {coinIcon('E4 - Pink Pacifist', '27.5%', '83.75%', '35.25%', '83.75%', Elephant4, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717444024498651137')}
                    {coinIcon('E5 - Graying Gray', '27.5%', '95%', '35.25%', '95%', Elephant5, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717445124010278913')}
                    {coinIcon('E6 - Tinkering Twilight', '47.5%', '5%', isDesktopOrLaptop ? '56.5%' : '55%', '5%', Elephant6, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717446223521906689')}
                    {coinIcon('E7 - Forest Funk', '47.5%', '16.25%', '55.25%', '16.25%', Elephant7, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717447323033534465')}
                    {coinIcon('E8 - Purple Passion', '47.5%', '27.5%', isDesktopOrLaptop ? '56.5%' : '55%', '27.5%', Elephant8, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717448422545162241')}
                    {coinIcon('E9 - Neon Nerd', '47.5%', '38.75%', '55.25%', '38.75%', Elephant9, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717449522056790017')}
                    {coinIcon('E10 - Sunny Savanna', '47.5%', '50%', isDesktopOrLaptop ? '56.5%' : '55%', '50%', Elephant10, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717450621568417793')}
                    {coinIcon('E11 - OG Orange', '47.5%', '61.25%', isDesktopOrLaptop ? '55.25%' : '54%', '61.25%', Elephant11, 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717451721080045569')}
                    {coinIcon('Gi1 - Green Gatsby', '47.5%', '72.5%', isDesktopOrLaptop ? '56.5%' : '55%', '72.5%', Giraffe1)}
                    {coinIcon('Gi2 - Eternal Summer', '47.5%', '83.75%', isDesktopOrLaptop ? '56.5%' : '55%', '83.75%', Giraffe2)}
                    {coinIcon('Gi3 - Cotton Candy Dreams', '47.5%', '95%', '56.5%', '95%', Giraffe3)}
                    {coinIcon('Gi4 - Jungle Jam', '67.5%', '5%', '75.25%', '5%', Giraffe4)}
                    {coinIcon('Gi5 - Neon Nitro', '67.5%', '16.25%', '75.25%', '16.25%', Giraffe5)}
                    {coinIcon('Gi6 - Jungle Boogey', '67.5%', '27.5%', isDesktopOrLaptop ? '76.5%' : '75%', '27.5%', Giraffe6)}
                    {coinIcon('Gi7 - Easy Breezy', '67.5%', '38.75%', '75.25%', '38.75%', Giraffe7)}
                    {coinIcon('Gi8 - Midnight Madness', '67.5%', '50%', isDesktopOrLaptop ? '76.5%' : '75%', '50%', Giraffe8)}
                    {coinIcon('Gi9 - Whispering White', '67.5%', '61.25%', isDesktopOrLaptop ? '76.5%' : '75%', '61.25%', Giraffe9)}
                    {coinIcon('Gi10 - Summer Blues', '67.5%', '72.5%', isDesktopOrLaptop ? '76.5%' : '75%', '72.5%', Giraffe10)}
                    {coinIcon('Gi11 - Razzy Raspberry', '67.5%', '83.75%', isDesktopOrLaptop ? '76.5%' : '75%', '83.75%', Giraffe11)}
                    {coinIcon('Gi12 - Hootin Halloween', '67.5%', '95%', isDesktopOrLaptop ? '76.5%' : '75%', '95%', Giraffe12)}
                    {coinIcon('R1 - Neon Gothic', '87.5%', '5%', isDesktopOrLaptop ? '95.25%' : '95%', '5%', Rhino1)}
                    {coinIcon('R2 - Yellow Thunder', '87.5%', '16.25%', isDesktopOrLaptop ? '96.5%' : '95%', '16.25%', Rhino2)}
                    {coinIcon('R3 - Grassy N Gassy Green', '87.5%', '27.5%', isDesktopOrLaptop ? '96.5%' : '95%', '27.5%', Rhino3)}
                    {coinIcon('R4 - Stomping Storm', '87.5%', '38.75%', isDesktopOrLaptop ? '96.5%' : '95%', '38.75%', Rhino4)}
                    {coinIcon('R5 - Raging Red', '87.5%', '50%', '95.25%', '50%', Rhino5)}
                    {coinIcon('R6 - Orange Crush', '87.5%', '61.25%', isDesktopOrLaptop ? '95.25%' : '95%', '61.25%', Rhino6)}
                    {coinIcon('R7 - Great Golden', '87.5%', '72.5%', isDesktopOrLaptop ? '95.25%' : '95%', '72.5%', Rhino7)}
                    {coinIcon('R8 - Paradise Punch', '87.5%', '83.75%', isDesktopOrLaptop ? '96.5%' : '95%', '83.75%', Rhino8)}
                    {coinIcon('R9 - Simmering Swimming', '87.5%', '95%', isDesktopOrLaptop ? '96.5%' : '95%', '95%', Rhino9)}
                </div>
                <div
                    css={{
                        width: isDesktopOrLaptop ? '90%' : '95%', 
                        height: '5%',
                        position: 'absolute',
                        top: '82.5%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'black',
                        border: '3px solid yellow',
                        borderWidth: '0px 3px 0px 3px',
                        // zIndex: 5
                    }}
                >
                </div>
                <div
                    css={{
                        width: '100%', 
                        height: '75%',
                        position: 'absolute',
                        top: '130%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#4E6E58',
                        // border: '3px solid yellow',
                        // borderWidth: '0px 3px 3px 3px'
                    }}
                >
                </div>
                <div
                    css={{
                        width: isDesktopOrLaptop ? '90%' : '95%', 
                        height: '60%',
                        position: 'absolute',
                        top: '110.5%',
                        left: '50%',
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'black',
                        border: '3px solid yellow',
                        borderWidth: '0px 3px 3px 3px'
                    }}
                >
                    {coinIcon('R10 - Bold Blue', '7.5%', '5%', isDesktopOrLaptop ? '15.5%' : '15%', '5%', Rhino10)}
                    {coinIcon('R11 - Purple Passion', '7.5%', '16.25%', isDesktopOrLaptop ? '16.5%' : '15%', '16.25%', Rhino11)}
                    {coinIcon('R12 - Marvelous Magestic Magenta', '7.5%', '27.5%', isDesktopOrLaptop ? '16.5%' : '16.5%', '27.5%', Rhino12)}

                    <div
                        css={{
                            height: '15vh', 
                            width: isDesktopOrLaptop ? '25vw' : '75vw',
                            backgroundColor: 'black',
                            position: 'absolute',
                            top: '115%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%)',
                            color: 'white'
                            
                            
                        }}
                    >   
                        <div
                            css={{
                                // backgroundColor: 'red',
                                position: 'relative', 
                                height: '100%', 
                                width: '100%',
                            }}
                        >
                            {/* <div
                                css={{
                                    width: '7.5%', 
                                    height: '30%',
                                    position: 'absolute',
                                    top: '30%',
                                    left: '35%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'red',
                                }}
                            >
                            </div> */}
                            <div
                                css={{
                                    width: '80%',
                                    position: 'absolute',
                                    top: '30%',
                                    left: '50%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: 'min(5vh, 30px)',
                                    backgroundColor: 'red',
                                }}
                            >
                                ADOPTABLE
                            </div>
                            {/* <div
                                css={{
                                    width: '7.5%', 
                                    height: '30%',
                                    position: 'absolute',
                                    top: '70%',
                                    left: '35%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'green',
                                }}
                            >
                            </div> */}
                            <div
                                css={{
                                    width: '80%',
                                    position: 'absolute',
                                    top: '70%',
                                    left: '50%',
                                    '-ms-transform': 'translate(-50%, -50%)',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'green',
                                    fontSize: 'min(5vh, 30px)',
                                }}
                            >
                                ADOPTED
                            </div>
                        </div>
                        {/* </div>
                        - means the animal still needs to be saved!
                        <br></br>
                        - means the animal has found a great home! */}
                    </div>
                </div>
            </HeadersTemplate>
        </div>
    )
}