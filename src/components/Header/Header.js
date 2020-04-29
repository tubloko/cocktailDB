import React from "react";

import logo from './../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <header className='container-fluid text-center mt-3'>
            <h1 className='pb-3'><img src={logo} alt="logo" title='cocktail' /></h1>
        </header>
    );
};

export default Header;
