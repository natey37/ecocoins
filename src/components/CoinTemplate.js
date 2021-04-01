import React from 'react'
import Nav from '../components/Nav.js'
import BottomNav from '../components/BottomNav'
import coin from '../assets/SPIFFYCOIN.gif'
import FinalCoin2 from '../assets/FinalCoin2.gif'
import {BrowserRouter as Router, Switch, Route, useParams, Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin1(props){
    const {coin, title, link} = props
    return(
        <div
            css={{
                position: 'relative', 
                height: '100vh', 
                width: '100vw'
            }}
        >
            <Nav></Nav>
            
          
          <a 
            css={{
                textDecoration: 'none',
                fontSize: 'min(15vw, 60px)',
                '&:hover':{
                    color: 'magenta',
                },
            }}
            href={link}>
                {title}
          </a>
            <img
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
            </img>

            <h3
                css={{
                    position: 'absolute',
                    top: '80%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
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
                    whiteSpace: 'nowrap'
                }}
            >Your name here...</h2>
            <div
                css={{
                    position: 'absolute',
                    bottom: '-50%',
                    width: '100%'
                }}
            >
                <BottomNav></BottomNav>
            </div>
        </div>
    )
}