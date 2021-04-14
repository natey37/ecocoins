import HeadersTemplate from '../components/HeadersTemplate'
import Apes from '../assets/Apes.png'
import ApesBack from '../assets/ApesBack.png'
import ElephantsBack from '../assets/elephantback.png'
import Elephants from '../assets/elephants.png'
import GiraffesBack from '../assets/giraffeback.png'
import Giraffes from '../assets/giraffes.png'
import RhinosBack from '../assets/rhinoback.png'
import Rhinos from '../assets/rhinos.png'
import BackButton from '../components/BackButton'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'
import GiraffeCoins from './Giraffes/GiraffeCoins'

export default function About(){
    const backgroundCoin = (image, top, left) => {
        return( <div
                    css={{
                        height: '30vh', 
                        width: '30vh',
                        backgroundImage: `url(${image})`,
                        backgroundSize: '100%',
                        position: 'absolute',
                        top: top,
                        left: left,
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >

                </div>)
    }
    return(
        <HeadersTemplate>
            <h1
                css={{
                    color: 'white',
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 'min(5vh, 50px)',
                    backgroundColor: 'rgba(75,0,130, 0.7)',
                    zIndex: 5
                }}
            >
                About Us
            </h1>
            <BackButton
                top={'23.5%'}
                left={'12%'}
            >

            </BackButton>
            {backgroundCoin(Apes, '15%', '0%')}
            {backgroundCoin(Giraffes, '15%', '24%')}
            {backgroundCoin(Rhinos, '15%', '48%')}
            {backgroundCoin(Elephants, '15%', '72%')}
            {backgroundCoin(Apes, '15%', '96%')}
            {backgroundCoin(ElephantsBack, '41%', '12%')}
            {backgroundCoin(RhinosBack, '41%', '36%')}
            {backgroundCoin(GiraffesBack, '41%', '60%')}
            {backgroundCoin(ApesBack, '41%', '84%')}
            {backgroundCoin(ElephantsBack, '41%', '108%')}
            {backgroundCoin(Giraffes, '67%', '0%')}
            {backgroundCoin(Apes, '67%', '24%')}
            {backgroundCoin(Elephants, '67%', '48%')}
            {backgroundCoin(Rhinos, '67%', '72%')}
            {backgroundCoin(Giraffes, '67%', '96%')}
            {backgroundCoin(RhinosBack, '93%', '12%')}
            {backgroundCoin(GiraffesBack, '93%', '36%')}
            {backgroundCoin(ElephantsBack, '93%', '60%')}
            {backgroundCoin(ApesBack, '93%', '84%')}
            {backgroundCoin(RhinosBack, '93%', '108%')}








            <div
                css={{

                    width: '80%',
                    color: 'white',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    '-ms-transform': 'translate(-50%, -50%)',
                    transform: 'translate(-50%, -50%)',
                    fontSize: 'min(4vw, 20px)',
                    textAlign: 'left',
                    backgroundColor: 'rgba(75,0,130, 0.7)',

                }}
            >
                <ul>
                    <li>
                        Our mission at Eco-Coins is to help endangered animals through the sale of limited edition digital coins.
                    </li>
                    <br></br>
                    <li>
                        Eco-Coins are meant to spread awareness about the growing problems of species extinction and contribute towards habitat restoration and the protection of these amazing animals.
                    </li>
                    <br></br>
                    <li>
                        Follow our developing Eco Habitat that will highlight all of the adoptions and conservation efforts that have been achieved through the sale of Eco-Coins.
                    </li>
                </ul>
            </div>
        </HeadersTemplate>
    )
}