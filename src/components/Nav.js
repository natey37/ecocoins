import React, {useState} from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Nav(props){
 
    return(
        <>
        
                <div
                    css={{
                        height: '15vh', 
                        position: 'relative',
                        backgroundColor: '#A6ECE0',
                        
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
                </div>
            
          
        </>
    )
}