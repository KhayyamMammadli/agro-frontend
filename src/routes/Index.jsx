import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectInner from '../pages/ProjectInner';
const AppRoutes = () => {
        return (
            <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/projectinner" element={<ProjectInner />}/>
            </Routes>
        );
};

export default AppRoutes;



