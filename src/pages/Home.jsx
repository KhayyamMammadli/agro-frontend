import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import banner1 from "../assets/banner1.jpeg"
import banner2 from "../assets/banner2.jpeg"
import banner3 from "../assets/banner3.jpg"
import banner4 from "../assets/banner4.jpeg"
import './Home.scss';

const Home = () => {
  const [isJqueryLoaded, setIsJqueryLoaded] = useState(false);

  useEffect(() => {
    if (window.jQuery) {
      setIsJqueryLoaded(true);
    }
  }, []);

  const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  };

  const slides = [
    {
      id: 1,
      image: banner1,
      title: 'Kənd Təsərrüfatının Gələcəyi',
      description: 'Modern aqrar həllər ilə daha yaxşı məhsuldarlıq'
    },
    {
      id: 2,
      image: banner2,
      title: 'Ekoloji Təmiz Məhsullar',
      description: 'Təbiətlə harmoniyada yetişdirilən məhsullar'
    },
    {
      id: 3,
      image: banner3,
      title: 'İnnovativ Aqrar Texnologiyalar',
      description: 'Ağıllı əkinçilik həlləri ilə daha yaxşı nəticələr'
    }
  ];

  return (
    <div className="home">
      <div className="banner-section">
        {isJqueryLoaded ? (
          <OwlCarousel className="banner-carousel owl-theme" {...options}>
            {slides.map((slide) => (
              <div key={slide.id} className="banner-item">
                <div className="banner-image">
                  <img src={slide.image} alt={slide.title} />
                  <div className="banner-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <button className="learn-more">Ətraflı</button>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="whyus">
        <div className="container">
          <div className="section-title">
            <h2>Niyə Biz?</h2>
            <p>Kənd təsərrüfatında etibarlı tərəfdaşınız</p>
          </div>
          
          <div className="whyus-cards">
            <div className="whyus-card">
              <div className="icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Ekoloji Təmiz</h3>
              <p>Bütün məhsullarımız təbii və ekoloji təmiz şəkildə yetişdirilir</p>
            </div>

            <div className="whyus-card">
              <div className="icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>İnnovativ Həllər</h3>
              <p>Müasir texnologiyalar və innovativ kənd təsərrüfatı həlləri təqdim edirik</p>
            </div>

            <div className="whyus-card">
              <div className="icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>15+ İl Təcrübə</h3>
              <p>Uzun illər ərzində qazanılmış təcrübə və etimad</p>
            </div>

            <div className="whyus-card">
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Peşəkar Komanda</h3>
              <p>Sahəsində təcrübəli mütəxəssislərdən ibarət peşəkar komanda</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <div className="section-title">
            <h2>Layihələrimiz</h2>
            <p>Uğurla tamamlanmış kənd təsərrüfatı layihələrimiz</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={banner1} alt="İstixana Layihəsi" />
                <div className="project-overlay">
                  <div className="project-category">İstixana</div>
                  <a href="#" className="view-project">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Müasir İstixana Kompleksi</h3>
                <p>Ağıllı suvarma sistemləri ilə təchiz edilmiş 5 hektar ərazidə istixana kompleksi</p>
                <div className="project-tags">
                  <span>İstixana</span>
                  <span>Ağıllı Sistem</span>
                  <span>İnnovasiya</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={banner2} alt="Üzümçülük Təsərrüfatı" />
                <div className="project-overlay">
                  <div className="project-category">Üzümçülük</div>
                  <a href="#" className="view-project">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Üzüm Bağları Kompleksi</h3>
                <p>Müasir texnologiyalarla idarə olunan 200 hektar üzüm bağları</p>
                <div className="project-tags">
                  <span>Üzümçülük</span>
                  <span>Bio</span>
                  <span>İxrac</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={banner3} alt="Heyvandarlıq Kompleksi" />
                <div className="project-overlay">
                  <div className="project-category">Heyvandarlıq</div>
                  <a href="#" className="view-project">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Müasir Heyvandarlıq Kompleksi</h3>
                <p>Tam avtomatlaşdırılmış 1000 başlıq heyvandarlıq təsərrüfatı</p>
                <div className="project-tags">
                  <span>Heyvandarlıq</span>
                  <span>Avtomatika</span>
                  <span>Süd</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={banner4} alt="Taxılçılıq Təsərrüfatı" />
                <div className="project-overlay">
                  <div className="project-category">Taxılçılıq</div>
                  <a href="#" className="view-project">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>Taxılçılıq Təsərrüfatı</h3>
                <p>GPS naviqasiya sistemli traktorlar ilə idarə olunan 1000 hektar taxıl sahəsi</p>
                <div className="project-tags">
                  <span>Taxılçılıq</span>
                  <span>GPS</span>
                  <span>Texnologiya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="container">
          <div className="section-title">
            <h2>Xidmətlərimiz</h2>
            <p>Kənd təsərrüfatında hərtərəfli həllər təqdim edirik</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tractor"></i>
              </div>
              <div className="service-content">
                <h3>Ağıllı Əkinçilik</h3>
                <p>GPS naviqasiya sistemləri və dəqiq əkinçilik texnologiyaları ilə məhsuldarlığı artırın</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Dəqiq əkin planlaması</li>
                  <li><i className="fas fa-check"></i> Resurs optimizasiyası</li>
                  <li><i className="fas fa-check"></i> Məhsuldarlıq analizi</li>
                </ul>
                <button className="service-btn">Ətraflı Məlumat</button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <div className="service-content">
                <h3>Üzvi Əkinçilik</h3>
                <p>Ekoloji təmiz məhsul yetişdirmə texnologiyaları və sertifikasiya xidmətləri</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Bio sertifikasiya</li>
                  <li><i className="fas fa-check"></i> Təbii gübrələmə</li>
                  <li><i className="fas fa-check"></i> Zərərvericilərə qarşı bio mübarizə</li>
                </ul>
                <button className="service-btn">Ətraflı Məlumat</button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-solar-panel"></i>
              </div>
              <div className="service-content">
                <h3>İstixana Sistemləri</h3>
                <p>Müasir istixana komplekslərinin qurulması və avtomatlaşdırılması</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Ağıllı iqlim kontrolu</li>
                  <li><i className="fas fa-check"></i> Avtomatik suvarma</li>
                  <li><i className="fas fa-check"></i> LED işıqlandırma</li>
                </ul>
                <button className="service-btn">Ətraflı Məlumat</button>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-flask"></i>
              </div>
              <div className="service-content">
                <h3>Laboratoriya Analizləri</h3>
                <p>Torpaq, su və məhsul keyfiyyətinin professional laboratoriya təhlili</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Torpaq analizi</li>
                  <li><i className="fas fa-check"></i> Su keyfiyyəti testi</li>
                  <li><i className="fas fa-check"></i> Məhsul sertifikatı</li>
                </ul>
                <button className="service-btn">Ətraflı Məlumat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;