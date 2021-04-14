import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function BackButton(props){
    const {top, left} = props
    return(
        <Link
            css={{
                height: '100%'
            }}
            to={'/'}
        >
            <div
                css={{
                    backgroundColor: '#7ADFBB',
                    position: 'absolute',
                    top: top,
                    left: left,
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    height: '5vh', 
                    width: '5vh',
                    borderRadius: '50%',
                    zIndex: 5
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
    )
}