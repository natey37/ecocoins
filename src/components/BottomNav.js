import React from 'react'
import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function BottomNav(){

    return(
        <div
            css={{
                backgroundColor: '#7ADFBB',
                color: 'black',
                height: '10vh', 
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span
                css={{
                    marginLeft: 25,
                    fontWeight: 'bold',
                }}
            >
                <Link 
                    css={{
                        textDecoration: 'none',
                        color: '#544B3D'

                    }}
                    to='/about'
                >
                    About
                </Link>
            </span>

            <span
                css={{
                    fontWeight: 'bold',
                    color: '#544B3D'

                }}
            >
                <a 
                    css={{
                        textDecoration: 'none',
                        color: '#544B3D'
                    }}
                    href='https://www.worldwildlife.org/'
                >
                    Protect &#38; Save
                </a>
            </span>

            <span
                css={{
                    marginRight: 25,
                    fontWeight: 'bold'
                }}
            >
                <Link 
                    css={{
                        textDecoration: 'none',
                        color: '#544B3D'
                    }}
                    to='/'
                >
                    Follow Us
                </Link>
            </span>
        </div>
    )
}