import React from 'react'
import {Link} from 'react-router-dom'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function BottomNav(){

    return(
        <div
            css={{
                backgroundColor: 'turquoise',
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
                        color: 'black'
                    }}
                    to='/about'
                >
                    About
                </Link>
            </span>

            <span
                css={{
                    fontWeight: 'bold'
                }}
            >
                <Link 
                    css={{
                        textDecoration: 'none',
                        color: 'black'
                    }}
                    to='/affiliates'
                >
                    Protect &#38; Save
                </Link>
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
                        color: 'black'
                    }}
                    to='/'
                >
                    Follow Us
                </Link>
            </span>
        </div>
    )
}