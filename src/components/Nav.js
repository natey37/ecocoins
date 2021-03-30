import React, {useState} from 'react'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Nav(props){
 
    return(
        <>
        
                <div
                    css={{
                        height: '15vh', 
                        position: 'relative',
                        backgroundColor: 'turquoise',
                        
                    }}
                >   
                    <div
                        // onClick={() => setSwing(!swing)}
                        // className={swing ? 'swingKraze' : ''}
                        css={{
                            border: 'solid black',
                            borderWidth: '0px 10px',
                            backgroundColor: 'black',
                            color: 'white',
                            fontSize: '10vh', 
                            margin: 0,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            '-ms-transform': 'translate(-50%, -50%)',
                            transform: 'translate(-50%, -50%) skewY(-3deg)',
                            '&:hover':{
                                color: 'magenta',
                            },
                            
                        }}
                    >   
                        ECO-COINS
                    </div>
                </div>
            
          
        </>
    )
}