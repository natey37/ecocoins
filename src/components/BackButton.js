import {Link} from 'react-router-dom'
import realbackbutton from '../assets/realbackbutton.png'
/** @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react'

export default function BackButton(props){
    const {top, left} = props

    const Spin = keyframes`
        25% {
            transform: rotateY(90deg);
        }

        50{
            transform: rotateY(180deg);
        }

        75% {
            transform: rotateY(270deg);
        }

        100% {
            transform: rotateY(360deg);
        }
        `;
    return(
        <div
            css={{
                position: 'absolute',
                top: top,
                left: left,
                '-ms-transform': 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)',
                height: '10vh', 
                width: '10vh',
                borderRadius: '50%',
                zIndex: 5
            }}
        >

      
        <Link
            css={{
                height: '100%'
            }}
            to={'/'}
        >
            <div
                css={{
                    backgroundImage: `url(${realbackbutton})`,
                    backgroundSize: '10vh 10vh',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor: '#7ADFBB',
                    position: 'relative',
                    // top: top,
                    // left: left,
                    // '-ms-transform': 'translate(-50%, -50%)',
                    // transform: 'translate(-50%, -50%)',
                    height: '10vh', 
                    width: '10vh',
                    // borderRadius: '50%',
                    // zIndex: 5
                    ':hover' : {
                        animation: `${Spin} 3s linear 1`,        
                    }
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
        </Link>     
        </div>
    )
}