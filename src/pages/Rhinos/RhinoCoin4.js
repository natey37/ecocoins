import React from 'react'
import CoinTemplate from '../../components/CoinTemplate'
import RhinoFront from '../../assets/rhinos.png'
import RhinoBack from '../../assets/rhinoback.png'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function RhinoCoin4(){

    return(
        <div>
            <CoinTemplate
                coin={'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal4.gif'}
                title={'Stomping Storm Rhino'}
                // link={'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/83888770993738068470817144150095546138368866452306998561586717429730847490049'}
                backLink={'/RhinoCoins'}
                backgroundImageBack={RhinoFront}
                backgroundImageFront={RhinoBack}
                prevLink={'/GrassyNGassyGreenRhino'}
                nextLink={'/RagingRedRhino'}
            />
       </div>
    )
}