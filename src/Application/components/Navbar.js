import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <Layout />
        </div>
    )
};

export default Navbar;

const Layout = () => {

    return (
        <>
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    {/* <img src='./images/moss.png'></img> */}
                    Mox'Pro
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <Links />
        </>
    )
}

const Links = () => {

    return (
        <>
            <nav className='nav-links'>
                <NavLink to='/'>О компании</NavLink>
                <NavLink to='/catalog'>Каталог</NavLink>
                <NavLink to='/portfolio'>Примеры работ</NavLink>
                <NavLink to='/special-deals'>Акции</NavLink>
                <NavLink to='/contact'>Контакты</NavLink>
            </nav>
        </>
    )
}
