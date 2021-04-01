import React from 'react'
import CoinTemplate from '../components/CoinTemplate'
import FinalCoin4 from '../assets/FinalCoin4.gif'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin8(){

    return(
        <div>
            <CoinTemplate
                coin={FinalCoin4}
                title={'Professor Plum Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717437427428884481'}
            />
       </div>
    )
}