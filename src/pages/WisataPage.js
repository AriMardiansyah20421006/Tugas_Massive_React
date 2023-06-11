import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Herowisata from '../components/wisata/herowisata'
import Carouselwisata from '../components/wisata/carouselwisata'
import Travel from '../components/landingpage/travel'

const WisataPage = () => {
  return (
    <div>
        <Navbar/>
        <Herowisata/>
        <Carouselwisata/>
        <Travel/>
        <Footer/>
    </div>
  )
}

export default WisataPage