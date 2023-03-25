import "./Home.css";
import Product from "./Product";


function Home() {

    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazonBanner" />
            <div className="home__row">
                <Product
                    id="2554546"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41b3PmlPPuL._SX300_SY300_QL70_FMwebp_.jpg"
                    title="HP Victus Gaming Latest AMD Ryzen 7 5800H Processor 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/144 Hz/300 nits/GeForce RTX 3060 6GB Graphics/Backlit KB/Win 11/MSO/Xbox Pass),16-e0361ax"
                    rating={4}
                    price={102990} />
                <Product
                    id="2554547"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61biVk6kqQL._SX522_.jpg"
                    title="Canon EOS R10 24.2MP Mirrorless Digital Camera with RF-S18-150mm Kit Lens (APS-C Sensor, 23 FPS, Next Gen Auto Focus, Next Level Image Stabilisation, 4K) – Black"
                    rating={4}
                    price={115490} />
            </div>
            <div className="home__row">
                <Product
                    id="2554548"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/715Dsu2jxWL._SX522_.jpg"
                    title="Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light,Dolby Atmos Sound, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus, Wi-Fi Tablet, Gray"
                    rating={4}
                    price={102990} />
                <Product
                    id="2554549"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41b3PmlPPuL._SX300_SY300_QL70_FMwebp_.jpg"
                    title="HP Victus Gaming Latest AMD Ryzen 7 5800H Processor 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/144 Hz/300 nits/GeForce RTX 3060 6GB Graphics/Backlit KB/Win 11/MSO/Xbox Pass),16-e0361ax"
                    rating={4}
                    price={102990} />
                <Product
                    id="2554550"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51SuT0i-+dL._AC_UY327_FMwebp_QL65_.jpg"
                    title="One Word That Will Change Your Life, Expanded Edition (Jon Gordon)"
                    rating={4}
                    price={2088} />
            </div>
            <div className="home__row">
                <Product
                    id="2554551"
                    image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61EgFzOnMxL._SX522_.jpg"
                    title="Vu 164 cm (65 inches) The Masterpiece Glo Series 4K Ultra HD Smart Android QLED TV 65QMP (Armani Gold) (2022 Model) | Built in 4.1 Speaker"
                    rating={5}
                    price={79999} />
            </div>
        </div>
    )
}

export default Home;