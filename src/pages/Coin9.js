import React from 'react'
import CoinTemplate from '../components/CoinTemplate'
import FinalCoin3 from '../assets/FinalCoin3.gif'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin9(){

    return(
        <div>
            <CoinTemplate
                coin={FinalCoin3}
                title={'Cherry Bomb Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717438526940512257'}
                backLink={'/ApeCoins'}
            />
       </div>
    )
}