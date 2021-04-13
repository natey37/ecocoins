import React from 'react'
import CoinTemplate from '../../components/CoinTemplate'
import ApesBack from '../../assets/ApesBack.png'
import ApesFront from '../../assets/Apes.png'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin7(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFInalCoin7.gif'}
                title={'Cotton Candy Ape'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717436327917256705'}
                backLink={'/ApeCoins'}
                backgroundImageBack={ApesBack}
                backgroundImageFront={ApesFront}
            />
       </div>
    )
}