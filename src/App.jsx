import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Route.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./assets/main.scss"

const App = () => {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="main-content">
                    <div className="page-content">
                        <AppRoutes />
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
