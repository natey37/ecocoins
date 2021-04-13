import React from 'react'
import Coin from '../../components/Coin'
import GroupShowTemplate from '../../components/GroupShowTemplate'
import Elephants from '../../assets/elephants.png'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import { useMediaQuery } from 'react-responsive'


export default function ElephantCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

        return(
            <>
                <GroupShowTemplate
                        animal={'Elephant'}
                        coins={isDesktopOrLaptop ? 
                            [
                                Coin('GreatGreenGrasslandsElephant', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal1.gif'), 
                                Coin('SherbertSunsetElephant', '25%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif'),
                                Coin('MagesticMagentaElephant', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal3.gif'), 
                                Coin('PinkPacifistElephant', '25%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal4.gif'), 
                                Coin('GrayingGrayElephant', '25%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal5.gif'), 
                                Coin('SunnySavannaElephant', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal10.gif'), 
                                Coin('TinkeringTwilightElephant', '75%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal6.gif'), 
                                Coin('ForestFunkElephant', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal7.gif'), 
                                Coin('PurplePassionElephant', '75%', '25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal8.gif'), 
                                Coin('NeonNerdElephant', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif'), 
                                Coin('OGOrangeElephant', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal11.gif')
                            ] 
                            : 
                            [   
                                Coin('GreatGreenGrasslandsElephant', '25%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal1.gif'), 
                                Coin('SherbertSunsetElephant', '25%', '23.25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif'),
                                Coin('MagesticMagentaElephant', '25%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal3.gif'), 
                                Coin('PinkPacifistElephant', '25%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal4.gif'), 
                                Coin('GrayingGrayElephant', '25%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal5.gif'), 
                                Coin('SunnySavannaElephant', '25%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal10.gif'), 
                                Coin('TinkeringTwilightElephant', '75%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal6.gif'), 
                                Coin('ForestFunkElephant', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal7.gif'), 
                                Coin('PurplePassionElephant', '75%', '32.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal8.gif'), 
                                Coin('NeonNerdElephant', '75%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif'), 
                                Coin('OGOrangeElephant', '75%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal11.gif')
                            ]
                        }
                        donationLink={'https://www.sheldrickwildlifetrust.org/orphans'}
                        donationName={'Sheldrick Wildlife Trust'}
                        donationBlurb={'an organization that exists to protect Africa’s wildlife and to preserve habitats for the future of all wild species'}
                        backgroundImage={Elephants}
                />
                {/* {isDesktopOrLaptop &&
                    <GroupShowTemplate
                        animal={'Elephant'}
                        coins={[Coin('GreatGreenGrasslandsElephant', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal1.gif'), Coin('SherbertSunsetElephant', '25%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif'),Coin('MagesticMagentaElephant', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal3.gif'), Coin('PinkPacifistElephant', '25%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal4.gif'), Coin('GrayingGrayElephant', '25%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal5.gif'), Coin('SunnySavannaElephant', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal10.gif'), Coin('TinkeringTwilightElephant', '75%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal6.gif'), Coin('ForestFunkElephant', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal7.gif'), Coin('PurplePassionElephant', '75%', '25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal8.gif'), Coin('NeonNerdElephant', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif'), Coin('OGOrangeElephant', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal11.gif')]}
                        donationLink={'https://www.sheldrickwildlifetrust.org/orphans'}
                        donationName={'Sheldrick Wildlife Trust'}
                        donationBlurb={'an organization that exists to protect Africa’s wildlife and to preserve habitats for the future of all wild species'}
                        backgroundImage={Elephants}
                    />
                }
                {isTabletOrMobileDevice &&
                    <GroupShowTemplate
                        animal={'Elephant'}
                        coins={[Coin('GreatGreenGrasslandsElephant', '25%', '7.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal1.gif'), Coin('SherbertSunsetElephant', '25%', '22.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal2.gif'),Coin('MagesticMagentaElephant', '25%', '37.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal3.gif'), Coin('PinkPacifistElephant', '25%', '57.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal4.gif'), Coin('GrayingGrayElephant', '25%', '72.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal5.gif'), Coin('SunnySavannaElephant', '25%', '87.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal10.gif'), Coin('TinkeringTwilightElephant', '75%', '72.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal6.gif'), Coin('ForestFunkElephant', '75%', '15%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal7.gif'), Coin('PurplePassionElephant', '75%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal8.gif'), Coin('NeonNerdElephant', '75%', '57.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal9.gif'), Coin('OGOrangeElephant', '75%', '87.5%', 'https://eco-coins.s3-us-west-2.amazonaws.com/ElephantCoins/CompressedElephantFinal11.gif')]}
                        donationLink={'https://www.sheldrickwildlifetrust.org/orphans'}
                        donationName={'Sheldrick Wildlife Trust'}
                        donationBlurb={'an organization that exists to protect Africa’s wildlife and to preserve habitats for the future of all wild species'}
                        backgroundImage={Elephants}
                    />
                } */}
            </>
    )
}