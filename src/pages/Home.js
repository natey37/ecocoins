import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import coin from '../assets/SPIFFYCOIN.gif'
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
        <img
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
        </img>
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