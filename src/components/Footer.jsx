import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <h2>AgroPM</h2>
                <p>Kənd təsərrüfatında innovativ həllər</p>
              </div>
              <div className="footer-social">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Əsas Keçidlər</h3>
              <ul>
                <li><Link to="/">Ana Səhifə</Link></li>
                <li><Link to="/haqqimizda">Haqqımızda</Link></li>
                <li><Link to="/xidmetler">Xidmətlər</Link></li>
                <li><Link to="/layiheler">Layihələr</Link></li>
                <li><Link to="/elaqe">Əlaqə</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Xidmətlərimiz</h3>
              <ul>
                <li><Link to="/xidmetler/aqilli-ekincilik">Ağıllı Əkinçilik</Link></li>
                <li><Link to="/xidmetler/uzvi-ekincilik">Üzvi Əkinçilik</Link></li>
                <li><Link to="/xidmetler/istixana">İstixana Sistemləri</Link></li>
                <li><Link to="/xidmetler/laboratoriya">Laboratoriya Analizləri</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Əlaqə</h3>
              <ul className="contact-info">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bakı şəh., Nizami küç. 123</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+994507003220</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>info@agropm.az</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>9:00-18:00 5gün</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AgroPM. Bütün hüquqlar qorunur.</p>
          <div className="footer-links">
            <a href="/mexfilik">Məxfilik Siyasəti</a>
            <a href="/istifade">İstifadə Şərtləri</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;