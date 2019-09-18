import React from 'react';
import giphy from './img/giphy.gif'
const Navbar = () => {
    return (
        <nav className="navbar bg-info text-white mb-5 " >
           
            <span className="navbar-brand mb-0 mx-auto" > <img src={giphy} alt="playing" width='400' height='30'/> find lyrics <i className="fas fa-music text-danger "></i></span>
        </nav >
    );
}

export default Navbar;