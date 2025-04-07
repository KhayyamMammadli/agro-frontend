import React from 'react';
import { FaLeaf, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa';
import './About.scss';
import about1 from '../assets/banner3.jpg';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="container">
                    <h1>Haqqımızda</h1>
                    <p>Kənd təsərrüfatında innovativ həllər və davamlı inkişaf</p>
                </div>
            </div>

            <div className="about-content">
                <div className="container">
                    <div className="about-section">
                        <div className="about-text">
                            <h2>Biz Kimik?</h2>
                            <p>AgroPM, kənd təsərrüfatı sahəsində 10 ildən çox təcrübəyə malik peşəkar komandadır. Biz müasir texnologiyalar və innovativ həllər vasitəsilə kənd təsərrüfatının inkişafına töhfə veririk.</p>
                            <p>Məqsədimiz, davamlı və effektiv kənd təsərrüfatı həlləri təqdim etmək və Azərbaycanın aqrar potensialını tam şəkildə həyata keçirməyə kömək etməkdir.</p>
                        </div>
                        <div className="about-image">
                            <img src={about1} alt="AgroPM Komandası" />
                        </div>
                    </div>

                    <div className="stats-section">
                        <div className="stat-card">
                            <div className="icon-wrapper">
                                <FaLeaf className="icon" />
                            </div>
                            <h3>1000+</h3>
                            <p>Tamamlanmış Layihə</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-wrapper">
                                <FaUsers className="icon" />
                            </div>
                            <h3>50+</h3>
                            <p>Peşəkar Mütəxəssis</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-wrapper">
                                <FaChartLine className="icon" />
                            </div>
                            <h3>95%</h3>
                            <p>Müştəri Məmnuniyyəti</p>
                        </div>
                        <div className="stat-card">
                            <div className="icon-wrapper">
                                <FaGlobe className="icon" />
                            </div>
                            <h3>15+</h3>
                            <p>Region</p>
                        </div>
                    </div>

                    <div className="values-section">
                        <h2>Dəyərlərimiz</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <h3>Peşəkarlıq</h3>
                                <p>Hər bir layihədə yüksək peşəkarlıq və keyfiyyət standartlarına riayət edirik.</p>
                            </div>
                            <div className="value-card">
                                <h3>İnnovasiya</h3>
                                <p>Müasir texnologiyalar və innovativ həllərlə kənd təsərrüfatını inkişaf etdiririk.</p>
                            </div>
                            <div className="value-card">
                                <h3>Davamlılıq</h3>
                                <p>Ətraf mühitə zərər verməyən, davamlı kənd təsərrüfatı həlləri təqdim edirik.</p>
                            </div>
                            <div className="value-card">
                                <h3>Etibarlılıq</h3>
                                <p>Müştərilərimizə etibarlı və davamlı xidmət göstərmək bizim əsas prinsipimizdir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;