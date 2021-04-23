import React from 'react'
import CoinTemplate from '../../components/CoinTemplate'
import ElephantFront from '../../assets/elephants.png'
import ElephantBack from '../../assets/elephantback.png'


/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function ElephantCoin2(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif'}
                title={'Sherbert Sunset Elephant'}
                link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717441825475395585'}
                backLink={'/ElephantCoins'}
                backgroundImageBack={ElephantFront}
                backgroundImageFront={ElephantBack}
                nextLink={'/MagesticMagentaElephant'}
                prevLink={'/GreatGreenGrasslandsElephant'}
            />
       </div>
    )
}