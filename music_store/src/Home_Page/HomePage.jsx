import AboutUs from "../components/AboutUs"
import Artists from "../components/Artists"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PlayList from "../components/PlayList"
import PopularAlbums from "../components/PopularAlbums"
import PopularMusics from "../components/PopularMusics"

const HomePage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <AboutUs/>
    <PopularMusics/>
    <PopularAlbums />
    <Artists />
    <PlayList />
    <Footer />
    </>
  )
}

export default HomePage