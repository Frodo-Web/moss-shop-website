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
                <img src='./images/moss.png'></img>
                <div class="nav-title">Mox'Pro</div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <Links />
            <ThemeToggle />
        </>
    )
}

const Links = () => {
    const handleLinkClick = () => {
        document.querySelector('.nav > .nav-btn > label').click();
    }

    return (
        <>
            <nav className='nav-links'>
                <NavLink onClick={handleLinkClick} to='/'>О компании</NavLink>
                <NavLink onClick={handleLinkClick} to='/catalog'>Каталог</NavLink>
                <NavLink onClick={handleLinkClick} to='/portfolio'>Примеры работ</NavLink>
                <NavLink onClick={handleLinkClick} to='/special-deals'>Акции</NavLink>
                <NavLink onClick={handleLinkClick} to='/contact'>Контакты</NavLink>
            </nav>
        </>
    )
}

const ThemeToggle = () => {
    const handleClick = () => {
        document.querySelector('body').classList.toggle("black-theme");
    }
    return (
        <>
            <button onClick={handleClick}></button>
        </>
    )
}