import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import './Contact.scss';

// Leaflet ikon sorunu için çözüm
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const position = [40.3793, 49.8741]; 
    const whatsappNumber = '+994507003220';

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Salam, AgroPM haqqında məlumat almaq istəyirəm.');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                <h1>Bizimlə Əlaqə</h1>
                <p>Suallarınız üçün bizimlə əlaqə saxlayın.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="icon-wrapper">
                            <FaMapMarkerAlt className="icon" />
                        </div>
                        <h3>Ünvan</h3>
                        <p>Bakı şəh., Nizami küç. 123</p>
                    </div>
                    <div className="info-card">
                        <div className="icon-wrapper">
                            <FaPhone className="icon" />
                        </div>
                        <h3>Telefon</h3>
                        <p>+994507003220</p>
                    </div>
                    <div className="info-card">
                        <div className="icon-wrapper">
                            <FaEnvelope className="icon" />
                        </div>
                        <h3>E-poçt</h3>
                        <p>info@agropm.az</p>
                    </div>
                    <div className="info-card whatsapp-card" onClick={handleWhatsAppClick}>
                        <div className="icon-wrapper">
                            <FaWhatsapp className="icon" />
                        </div>
                        <h3>WhatsApp</h3>
                        <p>Birbaşa əlaqə qurun</p>
                    </div>
                </div>

                <div className="contact-content">
                    <div className="contact-form">
                        <h2>Mesaj Göndərin</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Adınız"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-poçt ünvanınız"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Telefon nömrəniz"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Mesajınız"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Göndər</button>
                        </form>
                    </div>

                    <div className="map-container">
                        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    AgroPM <br /> Nizami küç. 123
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;