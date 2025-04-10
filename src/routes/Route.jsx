import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import AboutPage from "../pages/AboutPage.jsx"
import Projects from "../pages/Projects";
import ProjectInner from "../pages/ProjectInner";


const AppRoutes = () => {
        return (
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/about" element={<AboutPage />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/projectinner" element={<ProjectInner />}/>
            </Routes>
        );
};

export default AppRoutes;



