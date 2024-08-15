import React, { useState } from 'react';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import '../styles/Header.scss';

function Header() {
    const [showProjects, setShowProjects] = useState(false);
    const [showResume, setshowResume] = useState(false);
    const [showContact, setshowContact] = useState(false);

    const handleProjectsClick = () => {
        setShowProjects(true);
    };

    const handleResumeClick = () =>{
        setshowResume(true);
    }
    const handleContactClick = () =>{
        setshowContact(true);
    }

    return (
        <div className='Header'>
            <div className='Header-nav'>
                <div className='Header-name' onClick={() => window.location.href = '/'}>
                    <h1>
                        <span className="typed-text">Hello, I'm Sherine Amoit</span>
                    </h1>
                </div>
                <div className='Header-links'>
                    <a onClick={handleProjectsClick} className='Header-link'>Projects</a>
                    <a onClick={handleResumeClick} className='Header-link'>Resume</a>
                    <a onClick={handleContactClick} className='Header-link'>Contact</a>
                </div>
            </div>

            {/* Conditionally render the Projects component */}
            {showProjects && <Projects />}
            {showResume && <Resume />}
            {showContact && <Contact />}
        </div>
    );
}

export default Header;
