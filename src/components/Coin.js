import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react'

export default function Coin(link, top, left, src){

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    return(
        <>
            <div
                    css={{
                        // backgroundColor: 'red',
                        height: isDesktopOrLaptop ? '50%' : '30%',
                        width: '10%',
                        position: 'absolute',
                        top: top,
                        left: left,
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Link
                    to={link}
                    >
                    <LazyLoadImage
                        effect='blur'
                        src={src}
                        height='100%'
                    />
                    </Link>
            </div>
            {/* {isDesktopOrLaptop && 
                <div
                    css={{
                        // backgroundColor: 'red',
                        height: '50%',
                        width: '10%',
                        position: 'absolute',
                        top: top,
                        left: left,
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Link
                    to={link}
                    >
                    <LazyLoadImage
                        effect='blur'
                        src={src}
                        height='100%'
                    />
                    </Link>
                </div>
            }
            {isTabletOrMobileDevice && 
                <div
                    css={{
                        // backgroundColor: 'red',
                        height: '35%',
                        width: '10%',
                        position: 'absolute',
                        top: top,
                        left: left,
                        '-ms-transform': 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <Link
                    to={link}
                    >
                    <LazyLoadImage
                        effect='blur'
                        src={src}
                        height='100%'
                    />
                    </Link>
                </div>
            } */}
        </>
    )
}