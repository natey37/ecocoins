import React from 'react'
import Coin from '../../components/Coin'
import GroupShowTemplate from '../../components/GroupShowTemplate'
import Apes from '../../assets/Apes.png'
import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function ApeCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
        //8.75 23.25 38.75 58.75 73.75 88.75
        return(
            <GroupShowTemplate
                animal={'Gorilla'}
                coins={isDesktopOrLaptop ? 
                    [
                        Coin('BigBlueApe', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin1.gif'), 
                        Coin('FunkyVaporApe', '25%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin2.gif'), 
                        Coin('GreatGreenApe', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin3.gif'),
                        Coin('GrapeApe', '25%', '75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin4.gif'), 
                        Coin('MidnightApe', '25%', '85%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin5.gif'), 
                        Coin('CrimsonApe', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin6.gif'), 
                        Coin('CottonCandyApe', '75%', '25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFInalCoin7.gif'), 
                        Coin('ProfessorPlumApe', '75%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin8.gif'), 
                        Coin('CherryBombApe', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin9.gif'), 
                        Coin('SilverBackApe', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin10.gif')]
                :
                    [
                        Coin('BigBlueApe', '25%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin1.gif'), 
                        Coin('FunkyVaporApe', '25%', '23.25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin2.gif'), 
                        Coin('GreatGreenApe', '25%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin3.gif'), 
                        Coin('GrapeApe', '25%', '65%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin4.gif'), 
                        Coin('MidnightApe', '25%', '82.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin5.gif'), 
                        Coin('CrimsonApe', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin6.gif'), 
                        Coin('CottonCandyApe', '75%', '32.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFInalCoin7.gif'), 
                        Coin('ProfessorPlumApe', '75%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin8.gif'), 
                        Coin('CherryBombApe', '75%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin9.gif'), 
                        Coin('SilverBackApe', '75%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GorillaCoins/CompressedFinalCoin10.gif')]
                }
                donationLink={'https://gorillafund.org/'}
                donationName={'Diane Fossey'}
                donationBlurb={'Gorilla fund, an organization that helps protect and maintain natural habitats, provide medical care and ensure the well being of great apes'}
                backgroundImage={Apes}
            />
    )
}