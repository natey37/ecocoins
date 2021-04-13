import React from 'react'
import Coin from '../../components/Coin'
import GroupShowTemplate from '../../components/GroupShowTemplate'
import Rhinos from '../../assets/rhinos.png'

import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function RhinoCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    //10 26 42 58 74 90 for six coins

            //8.75 23.25 38.75 58.75 73.75 88.75

        return(
            <GroupShowTemplate
            animal={'Rhino'}
            coins={isDesktopOrLaptop ? 
                [
                    Coin('NeonGothicRhino', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal1.gif'), 
                    Coin('YellowThunderRhino', '25%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal2.gif'), 
                    Coin('GrassyNGassyGreenRhino', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal3.gif'), 
                    Coin('StompingStormRhino', '25%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal4.gif'), 
                    Coin('RagingRedRhino', '25%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal5.gif'), 
                    Coin('OrangeCrushRhino', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal6.gif'), 
                    Coin('GreatGoldenRhino', '75%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal7.gif'), 
                    Coin('ParadisePunchRhino', '75%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal8.gif'), 
                    Coin('SimmeringSwimmingRhino', '75%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal9.gif'), 
                    Coin('BoldBlueRhino', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal10.gif'), 
                    Coin('PurplePassionRhino', '75%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal11.gif'), 
                    Coin('MarvelousMagesticMagentaRhino', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal12.gif')]
            :
                [
                    Coin('NeonGothicRhino', '25%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal1.gif'), 
                    Coin('YellowThunderRhino', '25%', '23.25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal2.gif'), 
                    Coin('GrassyNGassyGreenRhino', '25%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal3.gif'), 
                    Coin('StompingStormRhino', '25%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal4.gif'), 
                    Coin('RagingRedRhino', '25%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal5.gif'), 
                    Coin('OrangeCrushRhino', '25%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal6.gif'), 
                    Coin('GreatGoldenRhino', '75%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal7.gif'), 
                    Coin('ParadisePunchRhino', '75%', '23.25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal8.gif'), 
                    Coin('SimmeringSwimmingRhino', '75%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal9.gif'), 
                    Coin('BoldBlueRhino', '75%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal10.gif'), 
                    Coin('PurplePassionRhino', '75%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal11.gif'), 
                    Coin('MarvelousMagesticMagentaRhino', '75%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/RhinoCoins/rhinofinal12.gif')]
            }
            donationLink={'https://www.sheldrickwildlifetrust.org/orphans?q%5Bspecies.slug%5D=rhino&q%5Bage%5D=&q%5Bgender%5D=&q%5Brescued.environ%5D=&q%5Blocation.slug%5D=&q%5Bname%5D=&filter_grid=2&q%5Balive%5D=true#orphan_search'}
            donationName={'Sheldrick Wildlife Trust'}
            donationBlurb={'an organization that exists to protect Africa’s wildlife and to preserve habitats for the future of all wild species'}
            backgroundImage={Rhinos}
        />
    )
}