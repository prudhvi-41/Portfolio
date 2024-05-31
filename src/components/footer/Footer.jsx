import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Prudhvi</h1>

            <u1 className="footer__list">

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Instagram</a>
                </li>

            </u1>

            <div className="footer__social">
                
            <a href="https://www.linkedin.com/in/prudhvi-sai-narra-0b1023298" className="footer__social-link" target="_blank">
        <i class="uil uil-linkedin"></i>
    </a>
    
    <a href="https://github.com/prudhvi-41" className="footer__social-link" target="_blank">
    <i class="uil uil-github-alt"></i>
    </a>

    <a href="https://www.instagram.com/prudhvisai/" className="footer__social-link" target="_blank">
    <i class="uil uil-instagram"></i>
    </a>

            </div>
            <span className="footer__copy">
                &#169;Narra Prudhvi Sai.All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer