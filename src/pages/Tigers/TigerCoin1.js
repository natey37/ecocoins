import React from 'react'
import CoinTemplate from '../../components/CoinTemplate'
import TigerFront from '../../assets/tigergroupfront.png'
import TigerBack from '../../assets/tigergroupback.png'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function TigerCoin1(){

    return(
        <div>
            <CoinTemplate
                coin={'https://i.imgur.com/MWXiii9.gif'}
                title={'White Walker Tiger'}
                // link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717429730847490049'}
                backLink={'/TigerCoins'}
                backgroundImageBack={TigerFront}
                backgroundImageFront={TigerBack}
                nextLink={'/NocturnalBluesTiger'}
                prevLink={'/GleamingGoldTiger'}
            />
       </div>
    )
}