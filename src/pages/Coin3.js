import React from 'react'
import CoinTemplate from '../components/CoinTemplate'
import FinalCoin9 from '../assets/FinalCoin9.gif'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin3(){

    return(
        <div>
            <CoinTemplate
                coin={FinalCoin9}
                title={'Great Green Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717431929870745601'}
                backLink={'/ApeCoins'}
            />
       </div>
    )
}