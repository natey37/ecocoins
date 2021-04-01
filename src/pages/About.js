import HeadersTemplate from '../components/HeadersTemplate'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function About(){

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
                }}
            >
                About Us
            </h1>

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
                    textAlign: 'left'

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