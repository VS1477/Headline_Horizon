import React from 'react'
import './Footer.css'

// Import the images from the assets folder
import facebookIcon from './facebook_icon.png'
import twitterIcon from './twitter_icon.png'
import linkedinIcon from './linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>Headline Horizon is your go-to destination for the latest news, breaking stories, and in-depth articles from around the world. We bring you up-to-date, unbiased, and reliable news across various categories including politics, entertainment, technology, and more.</p>
            <div className="footer-social-icons">
                
                <img src={facebookIcon} alt="Facebook" />
                <img src={twitterIcon} alt="Twitter" />
                <img src={linkedinIcon} alt="LinkedIn" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@Headline_Horizon.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Headline_Horizon - All Right Reserved.</p>
    </div>
  )
}

export default Footer
