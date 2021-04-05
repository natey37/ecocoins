import React from 'react'
import CoinTemplate from '../components/CoinTemplate'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin2(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin2.gif'}
                title={'Funky Vapor Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717430830359117825'}
                backLink={'/ApeCoins'}
            />
       </div>
    )
}