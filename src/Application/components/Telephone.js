import React from 'react';
import './Telephone.css';

const Telephone = () => {

    const handleFlagsClick = (event) => {
        if (event.target.tagName !== "LI" && event.target.tagName !== "UL") {
            event.target.parentNode.childNodes[0].childNodes[0].classList.toggle("active");
        }
    }

    const handleFlagClick = (event) => {
        event.target.parentNode.classList.toggle("active");
        event.target.parentNode.parentNode.setAttribute("data-code", event.target.dataset.code);
    }

    return (
        <>
            <div className='telephone'>
                <div className='container'>
                    <div className='flags-container' >
                        <div className='flags' onClick={handleFlagsClick}>
                            <ul>
                                <li data-code="RU" data-name="Russia" onClick={handleFlagClick}></li>
                                <li data-code="KZ" data-name="Kazakhstan" onClick={handleFlagClick}></li>
                            </ul>
                        </div>
                        <div className='dropdown-arrow' onClick={handleFlagsClick}></div>
                    </div>
                    <input id='tel' placeholder='+7 (905) 223-23-28' required />
                </div>
            </div>
        </>
    )
}

export default Telephone;