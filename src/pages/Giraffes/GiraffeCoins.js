import React from 'react'
import Coin from '../../components/Coin'
import GroupShowTemplate from '../../components/GroupShowTemplate'
import Giraffes from '../../assets/giraffes.png'
import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'


export default function GiraffeCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    //8.75 23.25 38.75 58.75 73.75 88.75

        return(
            <GroupShowTemplate
            animal={'Giraffe'}
            coins={isDesktopOrLaptop ? 
                [
                    Coin('GreenGatsbyGiraffe', '25%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal1.gif'), 
                    Coin('EternalSummerGiraffe', '25%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal2.gif'), 
                    Coin('CottonCandyDreamsGiraffe', '25%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal3.gif'), 
                    Coin('JungleJamGiraffe', '25%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal4.gif'), 
                    Coin('NeonNitroGiraffe', '25%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal5.gif'), 
                    Coin('JungleBoogeyGiraffe', '25%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal6.gif'), 
                    Coin('EasyBreezyGiraffe', '75%', '10%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal7.gif'), 
                    Coin('MidnightMadnessGiraffe', '75%', '20%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal8.gif'), 
                    Coin('WhisperingWhiteGiraffe', '75%', '30%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal9.gif'), 
                    Coin('SummerBluesGiraffe', '75%', '70%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal10.gif'), 
                    Coin('RazzyRaspberryGiraffe', '75%', '80%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal11.gif'), 
                    Coin('HootinHawlloweenGiraffe', '75%', '90%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal12.gif')
                ]
            :
                [
                    Coin('GreenGatsbyGiraffe', '25%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal1.gif'), 
                    Coin('EternalSummerGiraffe', '25%', '23.25%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal2.gif'), 
                    Coin('CottonCandyDreamsGiraffe', '25%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal3.gif'), 
                    Coin('JungleJamGiraffe', '25%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal4.gif'), 
                    Coin('NeonNitroGiraffe', '25%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal5.gif'), 
                    Coin('JungleBoogeyGiraffe', '25%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal6.gif'), 
                    Coin('EasyBreezyGiraffe', '75%', '8.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal7.gif'), 
                    Coin('MidnightMadnessGiraffe', '75%', '23.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal8.gif'), 
                    Coin('WhisperingWhiteGiraffe', '75%', '38.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal9.gif'), 
                    Coin('SummerBluesGiraffe', '75%', '58.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal10.gif'), 
                    Coin('RazzyRaspberryGiraffe', '75%', '73.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal11.gif'), 
                    Coin('HootinHawlloweenGiraffe', '75%', '88.75%', 'https://eco-coins.s3-us-west-2.amazonaws.com/GiraffeCoin/giraffefinal12.gif')
                ]
            }
            donationLink={'https://adopt.giraffeconservation.org/'}
            donationName={'Giraffe Conservation Foundation'}
            donationBlurb={'GCF is conducting a long-term giraffe conservation programme in north-western Namibia'}
            backgroundImage={Giraffes}
        />
    )
}