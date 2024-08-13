import React from 'react';
import './styles/Header.scss'

//use PascalCasing - capitalise first letter of functions
function Header() {
    //JSX: JavaScript XML
    return (
        <div className='Header'>
            <div className='Header-name'><h1>Hello I'm Sherine!</h1>
            </div>
        <div className='Header-additional'>
        <div className='Header-about'> About Me</div>
        <div className='Header-projects'>Projects</div>
        <div className='Header-resume'>Resume</div>  
        </div>  
        </div>
    )
}

export default Header;