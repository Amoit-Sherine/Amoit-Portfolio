import React from 'react';
import './styles/Header.scss';

function Header() {
    return (
        <div className='Header'>
            <div className='Header-nav'>
                <div className='Header-name' onClick={() => window.location.href = '/'}>
                    <h1>
                        <span className="typed-text">Hello, I'm Sherine Amoit</span>
                    </h1>
                </div>
                <div className='Header-links'>
                    <a href='#projects' className='Header-link'>Projects</a>
                    <a href='#resume' className='Header-link'>Resume</a>
                    <a href='#contact' className='Header-link'>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
