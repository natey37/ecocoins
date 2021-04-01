import React from 'react'
import CoinTemplate from '../components/CoinTemplate'
import FinalCoin8 from '../assets/FinalCoin8.gif'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin4(){

    return(
        <div>
            <CoinTemplate
                coin={FinalCoin8}
                title={'Grape Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717433029382373377'}
            />
       </div>
    )
}