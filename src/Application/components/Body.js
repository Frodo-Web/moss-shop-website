import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './Body.css';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Portfolio from '../pages/Portfolio';
import SpecialDeals from '../pages/SpecialDeals';
import Contact from '../pages/Contact';

const Body = () => {
    return (
        <div className='body'>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="special-deals" element={<SpecialDeals />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    )
};

export default Body;

const Layout = () => {

    return (
        <>
            <h2>Body</h2>
            <Outlet />
        </>
    )
}
