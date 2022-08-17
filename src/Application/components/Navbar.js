import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Layout />
        </div>
    )
};

export default Navbar;

const Layout = () => {

    return (
        <>
            <h2>Navbar</h2>
            <Links />
        </>
    )
}

const Links = () => {

    return (
        <>
            <nav className='links'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/catalog'>Catalog</NavLink>
                <NavLink to='/portfolio'>Portfolio</NavLink>
                <NavLink to='/special-deals'>Special Deals</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </>
    )
}
