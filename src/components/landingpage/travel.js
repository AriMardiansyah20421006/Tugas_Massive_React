import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import KULINER from '../../assets/landingpage/kuliner.svg'
import WISATA from '../../assets/landingpage/wisata.svg'
import TRENDING from '../../assets/landingpage/trending.svg'

const Travel = () => {
  return (
    <section>
        <div class="bg-image w-100 d-flex align-items-center justify-content-center bg-travel">
            <div class="position-absolute text-center">
                <div>
                <h1 class="font-weight-bold text-white font-weight-bold text-title-outline">TRAVEL LAMPUNG</h1>
                </div>
                <div class="row justify-content-around mt-5">

                <div class="col-xl-auto col-md-6 mb-4 text-center">
                    <img src={KULINER} alt=""/>
                    <h3 class="text-title-h3 mt-4 text-white">Kuliner</h3>
                    <p class="text-white text-outline mt-3 p-travel">Lorem ipsum dolor sit amet consectetur. Eget cursus egestas scelerisque eget.</p>
                </div>

                <div class="col-xl-auto col-md-6 mb-4 text-center">
                    <img src={WISATA} alt=""/>
                    <h3 class="text-title-h3 mt-4 text-white">Wisata</h3>
                    <p class="text-white text-outline mt-3 p-travel">Lorem ipsum dolor sit amet consectetur. Eget cursus egestas scelerisque eget.</p>
                </div>
                
                <div class="col-xl-auto col-md-6 mb-4 text-center">
                    <img src={TRENDING} alt=""/>
                    <h3 class="text-title-h3 mt-4 text-white">Trending</h3>
                    <p class="text-white text-outline mt-3 p-travel">Lorem ipsum dolor sit amet consectetur. Eget cursus egestas scelerisque eget.</p>
                </div>

                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Travel