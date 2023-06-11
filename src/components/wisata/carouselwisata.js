import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css';
import BGCAROUSEL from '../../assets/wisata/bg-carousel-wisata.svg'
import CAROUSEL1 from '../../assets/wisata/carousel-wisata-1.svg'
import CAROUSEL2 from '../../assets/wisata/carousel-wisata-2.svg'
import CAROUSEL3 from '../../assets/wisata/carousel-wisata-3.svg'
import CAROUSEL4 from '../../assets/wisata/carousel-wisata-4.svg'


const Carouselwisata = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" >
            {/* carousel item  */}
            <div class="carousel-item active custom-carousel">
                <img src={BGCAROUSEL} alt="Image 1"/>
                <div class="carousel-wisata-style">
                    <div class="carousel-div-img">
                        <img class="rounded-5 shadow" src={CAROUSEL1} alt="pantai"/>
                    </div>

                    <div class="text-center d-flex justify-content-center align-items-center carousel-div-text">
                        <div>
                            <h1 class="text-white">Pantai</h1>
                            <div class="d-flex justify-content-center">
                                <h2 class="text-white mt-5 w-75">Kota Lampung merupakan tempat destinasi yang indah, ada banyak sekali pantai pantai yang memiliki pesona keindahan yang memukau</h2>
                            </div>
                            <button type="button" class="btn btn-primary mt-5">Explore Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item custom-carousel">
                <img src={BGCAROUSEL} alt="Image 1"/>
                <div class="carousel-wisata-style">
                    <div class="carousel-div-img">
                        <img class="rounded-5 shadow" src={CAROUSEL2} alt="gunung"/>
                    </div>

                    <div class="text-center d-flex justify-content-center align-items-center carousel-div text">
                        <div>
                            <h1 class="text-white">Gunung</h1>
                            <div class="d-flex justify-content-center">
                                <h2 class="text-white mt-5 w-75">Lampung menawarkan berbagai destinasi pariwisata yang indah dan menarik berhubungan dengan gunung dan bukit.</h2>
                            </div>
                            <button type="button" class="btn btn-primary mt-5">Explore Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item custom-carousel">
                <img src={BGCAROUSEL} alt="Image 1"/>
                <div class="carousel-wisata-style">
                    <div class="carousel-div-img">
                        <img src={CAROUSEL3} alt="kuliner"/>
                    </div>

                    <div class="text-center d-flex justify-content-center align-items-center carousel-div-text">
                        <div>
                            <h1 class="text-white">Kuliner</h1>
                            <div class="d-flex justify-content-center">
                                <h2 class="text-white mt-5 w-75">Lampung memiliki kekayaan kuliner yang unik dan beragam. Makanan khas Lampung menawarkan cita rasa yang khas, dipengaruhi oleh budaya, tradisi, serta bahan-bahan lokal yang melimpah.</h2>
                            </div>
                            <button type="button" class="btn btn-primary mt-5">Explore Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item custom-carousel">
                <img src={BGCAROUSEL} alt="Image 1"/>
                <div class="carousel-wisata-style">
                    <div class="carousel-div-img">
                        <img class="rounded-5 shadow" src={CAROUSEL4} alt="pantai"/>
                    </div>

                    <div class="text-center d-flex justify-content-center align-items-center carousel-div-text">
                        <div>
                            <h1 class="text-white">Sejarah</h1>
                            <div class="d-flex justify-content-center">
                                <h2 class="text-white mt-5 w-75">Lampung memiliki sejarah yang kaya dengan berbagai situs bersejarah yang menarik untuk dikunjungi.</h2>
                            </div>
                            <button type="button" class="btn btn-primary mt-5">Explore Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>

           
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
  )
}

export default Carouselwisata