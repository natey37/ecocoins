export default Coin = (link, top, left, src) => {
    return(
     
                <div
                    css={{
                        height: '40%', 
                        width: '20%',
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
       
    )
}