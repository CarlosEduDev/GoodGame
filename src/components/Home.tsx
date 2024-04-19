import { ArrowDown } from 'phosphor-react'
import styles from './Home.module.css'
import { Footer } from './Footer'

const products = [
    {
        name: 'Xbox',
        img: 'https://s3-alpha-sig.figma.com/img/cb7a/a1e7/49ef7dff8c7fc9a91ec8c896790fe1ce?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM5LeYifX06XvDJsNynTMR7P9lNBt4epF~Ezo5IKGB2VnUAnplmX93uLyFHU6Jt1RJdhv3saLSRG~3YhkP57~Ib0uOqA6AQTrEePY~XD7GAFj5f143rwdU2isiWcjNFXNznFmP6sdXSpsw775o-IeXWCGBAaeJk9jxbxidY-J~AK9F9i-g~llG8Ooh0NuyPGWicZ9PdvGCW3YVTdgfg~nEKZH9~3K6QksZV~Byq6xKnhCoQRNXIlQYBRr4YDwlncG5YrGzBXuH49s-VXAp-shgULyXPktLBkeph8hPmnSLdbT5bKZ0pCQFtADEFOMEOATqJZAUqDQsyowAgjrrPKuw__'
    },
    {
        name: 'CyberPunk',
        img: 'https://s3-alpha-sig.figma.com/img/7f0c/746e/8628e4fac8bc7cafd806b52c7c8c6a9a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkZkrAtkLKps9JKdBc7HWo5BnJ68GMaAQgObJkEruszAJTTWESgunHweIgXZPiVFR-bMG~-Xdy0ITaVRBIewAg7pW9vICJRC8h47SzjlniW8yIasKxMiwvfdm9FIB8sOtKjK6TOSked3P-SDtJdVNT2uz1Y4lh0g6SWXaQwPxMEkXaaTQ8gkDfKmZyvVDdVg4MtMz4VSoZyf1qppgkMFcLPQmY7cRBQ44xfBGTMIJEn8fSedOkyKSYj5Ycc9ar5Uxg3Duqr3osr02hNt4Gz3jYLYeP6S5kZ0nzC6vjPAdX7LIVYUXO16jReacc25EfVg7h1hjqFzRcUsX6MDh9IAqw__'
    },
    {
        name: 'Multi-versus',
        img: 'https://s3-alpha-sig.figma.com/img/a240/6567/a24e756d3361d9e42d96ad0151973917?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1484szoyE~WFxfqbBi8xDfAAxy78Je6a1NyZqyRWdYga9cPoMyX4~uVdcIrZQrNQxyXpD0nD05S6ZzHTDZ4W8gn7jegci7gifYEWU1PLEdwZIZNKufkh2CFkhNPIN2gVyQVHAQo9zVHRdLLj85c897lqMmqQpNhXMv~Btk3O04aPR0rRfMN8yfDWzRe~Ni9oZWZRit70Luxg80WwH5kmZ0R4sV~GnOQ9WxagCcPdq8OUhwrsx8z6Gmbxx~xbwl-k9dYZa2KdZgNdi-5VIb11LiKdtxHU-mFcIVTHP7iMWJpoloG0XOureLP0P-jwe0LDkOy7th7iBJHoakuGcNRlw__'
    },
]

export function Home(){

    return(
        <>
        
        <main className={styles.main}>
        <div className={styles.productsColumns}>
            {products.map(product => {
                return (
                    <div className={styles.productCard} key={product.name}>
                        <img src={product.img} alt={product.name}/>
                        <div className={styles.productContent}>
                            <p>{product.name}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    <img className={styles.carImage} src="https://s3-alpha-sig.figma.com/img/56d1/fde7/b26c037b5e1a9582fb54884b80e4ed7a?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=htLucHV0x5--jPTZ1f1YNKzYdppaKuZVMqEH4GKgpY4Zhwu1E52K7C8aqPOw-WP2orAAiqew3dP7wLBT6AeR2LhDToxO9UBIGAeFp~urjv7JZnjHNSOh~TQn26-nzVfmi8BK1Mf-4FvMn~4jzQ9-z4ncoTPjdBKLuUsJOdQylbIZD6FfR3aoONDrmXoEmieNIt051XbGpFOtNSSE0JCsQBu-VYnMaViVm02D8TGrTnXpFf9rnjZJMTVbvV7CU9NZobFvsEsj9p5tbrT~92QFHOvK~wLOJqNhVFRc6NdCJRsDqeERrAiTGc9tMMnhT4nC7FD7kOIHRk8nbIGjydUlmg__" />

    <button>Carregar mais  <ArrowDown/></button>
    </main>

    <Footer/>
        </>
       
    )
}