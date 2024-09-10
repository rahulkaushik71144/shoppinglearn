import React from 'react';
import {Link} from 'react';
const Header = () => {
    return(
       
        <header>
            <h1> Simple shopping site made by Rahul Kaushik</h1>
            <nav>
                <Link to ="/"> Home</Link>
                <Link to ="Cart"> Shopping cart</Link>
                <Link to ="Products"> Products</Link>
            
            
            </nav>
        </header>
    
    );

};

export default Header; 



