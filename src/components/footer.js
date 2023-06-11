import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/styles.css'; 
import FB from '../assets/footer/fb.svg'
import TWITTER from '../assets//footer/twitter.svg'
import INSTAGRAM from '../assets/footer/Instagram.svg'
import LINKEDIN from '../assets/footer/linkedin.svg'

const Footer = () => {
  return (
    <footer class="bg-footer">
        <br/>
            <div class="text-center">
            <div>
                <p class="text-white">Privacy Policy | Terms of Use | Contact Support</p>
            </div>
            <div>
                <p class="text-white">Copyright vacalamp.com. All Rights Reserved | Designed by vacalamp.com</p>
            </div>
            <div>
                <img class="mx-1" src={FB} alt=""/>
                <img class="mx-1" src={TWITTER} alt=""/>
                <img class="mx-1" src={INSTAGRAM} alt=""/>
                <img class="mx-1" src={LINKEDIN} alt=""/>
            </div>
            <br/>
            
            </div>
    </footer> 
  )
}

export default Footer