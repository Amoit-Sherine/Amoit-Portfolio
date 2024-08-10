import React from 'react';

//use PascalCasing - capitalise first letter of functions
function Header() {
    //JSX: JavaScript XML
   const name = 'Mack'
   if(name)
    return <h1>Hello {name}!</h1>;
   return <h1>Hello World!</h1>;
}

export default Header;