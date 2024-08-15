import React, { useState } from 'react';
import Projects from './Projects';
import '../styles/Header.scss';

function Header() {
    const [showProjects, setShowProjects] = useState(false);

    const handleProjectsClick = () => {
        setShowProjects(true);
    };

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
                    <a href='#resume' className='Header-link'>Resume</a>
                    <a href='#contact' className='Header-link'>Contact</a>
                </div>
            </div>

            {/* Conditionally render the Projects component */}
            {showProjects && <Projects />}
        </div>
    );
}

export default Header;
