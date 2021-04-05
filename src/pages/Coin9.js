import React from 'react'
import CoinTemplate from '../components/CoinTemplate'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin9(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin9.gif'}
                title={'Cherry Bomb Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717438526940512257'}
                backLink={'/ApeCoins'}
            />
       </div>
    )
}