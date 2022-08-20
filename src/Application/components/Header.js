import React from 'react';
import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='header'>
            <Layout />
        </div>
    )
};

export default Header;

const Layout = () => {

    return (
        <>
            <Navbar />
        </>
    )
}
