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
            <div className="nav-header">
                <img src='./images/logo2.jpg'></img>
                <div className='about'>
                    <div className="nav-title">Mox'Pro</div>
                    <div className='description'>Живые растения без воды</div>
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
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
                <NavLink onClick={handleLinkClick} to='/'>Введение</NavLink>
                <NavLink onClick={handleLinkClick} to='/catalog'>Продукты</NavLink>
                {/* <NavLink onClick={handleLinkClick} to='/service'>Сервис</NavLink> */}
                <NavLink onClick={handleLinkClick} to='/portfolio'>Примеры работ</NavLink>
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