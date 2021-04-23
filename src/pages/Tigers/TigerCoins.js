import React from 'react'
import Coin from '../../components/Coin'
import LargeGroupShowTemplate from '../../components/LargeGroupShowTemplate'
import Rhinos from '../../assets/rhinos.png'
import tigers from '../../assets/tigergroupfront.png'

import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function TigerCoins(){
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    //10 26 42 58 74 90 for six coins

            //8.75 23.25 38.75 58.75 73.75 88.75

        return(
            <LargeGroupShowTemplate
            extraHeight={'200%'}
            animal={'Tiger'}
            coins={isDesktopOrLaptop ? 
                [   
                    Coin('WhiteWalkerTiger', '-8%', '8%', 'https://i.imgur.com/MWXiii9.gif'),
                    Coin('NocturnalBluesTiger', '-8%', '20%', 'https://i.imgur.com/nYM9GQs.gif'),
                    Coin('TurquoiseNoiseTiger', '-8%', '32%', 'https://i.imgur.com/Da6YdHX.gif'),
                    Coin('BashfulBlueTiger', '60%', '8%', 'https://i.imgur.com/c0bNNOe.gif'),
                    Coin('GlimmeringGreenTiger', '60%', '16%', 'https://i.imgur.com/PHvCsWw.gif'),
                    Coin('PurplePunchTiger', '60%', '24%', 'https://i.imgur.com/uHxuEz7.gif'),
                    Coin('RagingRedTiger', '60%', '32%', 'https://i.imgur.com/qLHTO2E.gif'),
                    Coin('GhastlyGreenTiger', '128%', '8%', 'https://i.imgur.com/r91qdtx.gif'),
                    Coin('OrangeO-ruptionTiger', '128%', '20%', 'https://i.imgur.com/thAomr4.gif'),
                    Coin('MurkyMagentaTiger', '128%', '32%', 'https://i.imgur.com/QMffMs1.gif'),

                    Coin('PrimalPinkTiger', '-8%', '68%', 'https://i.imgur.com/CvlzgDi.gif'),
                    Coin('YellowThunderTiger', '-8%', '80%', 'https://i.imgur.com/c0gLqTD.gif'),
                    Coin('PinkPassionTiger', '-8%', '92%', 'https://i.imgur.com/Cki0dEs.gif'),
                    Coin('BlunderingBrownTiger', '60%', '68%', 'https://i.imgur.com/boiMCOU.gif'),
                    Coin('StrawberryDreamsTiger', '60%', '76%', 'https://i.imgur.com/A1EX0Wd.gif'),
                    Coin('ApocalypticGoldTiger', '60%', '84%', 'https://i.imgur.com/t0K7J9M.gif'),
                    Coin('MysticalYellowTiger', '60%', '92%', 'https://i.imgur.com/gxubQ4W.gif'),
                    Coin('RoseGoldTiger', '128%', '68%', 'https://i.imgur.com/MTt3PIy.gif'),
                    Coin('BurntOrangeSunshineTiger', '128%', '80%', 'https://i.imgur.com/ez2o2zz.gif'),
                    Coin('GleamingGoldTiger', '128%', '92%', 'https://i.imgur.com/KvApHUR.gif'),
                ]
            :
                [
                    Coin('WhiteWalkerTiger', '-8%', '8%', 'https://i.imgur.com/MWXiii9.gif'),
                    Coin('NocturnalBluesTiger', '32%', '16%', 'https://i.imgur.com/nYM9GQs.gif'),
                    Coin('TurquoiseNoiseTiger', '-8%', '38%', 'https://i.imgur.com/Da6YdHX.gif'),
                    Coin('BashfulBlueTiger', '32%', '30%', 'https://i.imgur.com/c0bNNOe.gif'),
                    Coin('GlimmeringGreenTiger', '72%', '8%', 'https://i.imgur.com/PHvCsWw.gif'),
                    Coin('PurplePunchTiger', '110%', '16%', 'https://i.imgur.com/uHxuEz7.gif'),
                    Coin('RagingRedTiger', '72%', '38%', 'https://i.imgur.com/qLHTO2E.gif'),
                    Coin('GhastlyGreenTiger', '110%', '30%', 'https://i.imgur.com/r91qdtx.gif'),
                    Coin('OrangeO-ruptionTiger', '145%', '8%', 'https://i.imgur.com/thAomr4.gif'),
                    Coin('MurkyMagentaTiger', '145%', '38%', 'https://i.imgur.com/QMffMs1.gif'),

                    Coin('PrimalPinkTiger', '-8%', '58%', 'https://i.imgur.com/CvlzgDi.gif'),
                    Coin('YellowThunderTiger', '32%', '66%', 'https://i.imgur.com/c0gLqTD.gif'),
                    Coin('PinkPassionTiger', '-8%', '87.5%', 'https://i.imgur.com/Cki0dEs.gif'),
                    Coin('BlunderingBrownTiger', '32%', '79.5%', 'https://i.imgur.com/boiMCOU.gif'),
                    Coin('StrawberryDreamsTiger', '72%', '58%', 'https://i.imgur.com/A1EX0Wd.gif'),
                    Coin('ApocalypticGoldTiger', '110%', '66%', 'https://i.imgur.com/t0K7J9M.gif'),
                    Coin('MysticalYellowTiger', '72%', '87.5%', 'https://i.imgur.com/gxubQ4W.gif'),
                    Coin('RoseGoldTiger', '110%', '79.5%', 'https://i.imgur.com/MTt3PIy.gif'),
                    Coin('BurntOrangeSunshineTiger', '145%', '58%', 'https://i.imgur.com/ez2o2zz.gif'),
                    Coin('GleamingGoldTiger', '145%', '87.5%', 'https://i.imgur.com/KvApHUR.gif'),
                ]
            }
            donationLink={'https://www.internationaltigerproject.org/all-adoptees/'}
            donationName={'International Tiger Project'}
            donationBlurb={'The International Tiger Project (ITP) is a not-for-profit project for tiger conservation, rainforest protection and local community partnerships, in order to protect and save the entire ecosystem and biodiversity of habitats shared by tigers.'}
            backgroundImage={tigers}
        />
    )
}