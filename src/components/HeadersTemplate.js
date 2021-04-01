import Nav from './Nav'
import BottomNav from './BottomNav'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function HeadersTemplate({children}){

    return(
        <div
            css={{
                backgroundColor: '#4E6E58',
                position: 'relative', 
                height: '100vh', 
                width: '100vw'
            }}
        >
            <Nav></Nav>
            {children}
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