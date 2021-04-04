import React from 'react'
import CoinTemplate from '../components/CoinTemplate'
import Coin2 from '../assets/elephantfinal2.gif'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function ElephantCoin2(){

    return(
        <div>
            <CoinTemplate
                coin={Coin2}
                title={'Sherbert Sunset Elephant'}
                // link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717429730847490049'}
                backLink={'/ElephantCoins'}
            />
       </div>
    )
}