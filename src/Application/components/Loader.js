import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {

    useEffect(() => {

        const onPageLoad = () => {
            document.querySelector('body').classList.add("loaded");
        }

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
        }

        return () => {
            window.removeEventListener("load", onPageLoad);
        };
    }, [])
    return (
        <>
            <img src='./images/logo.jpg' className='loader-logo'></img>
            <div className="loader"></div>
            <div className="loader-curtains">
                <div className="loader-section section-left"></div>
                <div className="loader-section section-right"></div>
            </div>
        </>
    )
};

export default Loader;