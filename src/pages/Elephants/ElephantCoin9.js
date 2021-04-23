import React from 'react'
import CoinTemplate from '../../components/CoinTemplate'
import ElephantFront from '../../assets/elephants.png'
import ElephantBack from '../../assets/elephantback.png'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function ElephantCoin9(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif'}
                title={'Neon Nerd Elephant'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717449522056790017'}
                backLink={'/ElephantCoins'}
                backgroundImageBack={ElephantFront}
                backgroundImageFront={ElephantBack}
                nextLink={'/SunnySavannaElephant'}
                prevLink={'/PurplePassionElephant'}
            />
       </div>
    )
}