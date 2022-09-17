import React, { useState, useEffect, useRef } from 'react';
import './Telephone.css';

const Telephone = () => {

    const countryCode = {
        Russia: '+7',
        Belarus: '+375',
        Kazakhstan: '+7'
    }

    const [code, setCode] = useState(countryCode.Russia);

    const telCode = useRef(null);

    useEffect(() => {
        telCode.current.textContent = code;
    }, [code])

    const codeChange = (target) => {
        switch (target.dataset.code) {
            case 'RU':
            case 'KZ':
                setCode(countryCode.Russia);
                telCode.current.dataset.code = "RU/KZ";
                break;
            case 'BY':
                setCode(countryCode.Belarus);
                telCode.current.dataset.code = "BY";
                break;
        }
    }
    const handleFlagsClick = (event) => {
        if (event.target.tagName !== "LI" && event.target.tagName !== "UL") {
            event.target.parentNode.childNodes[0].childNodes[0].classList.toggle("active");
        }
    }

    const handleFlagClick = (event) => {
        event.target.parentNode.classList.toggle("active");
        event.target.parentNode.parentNode.setAttribute("data-code", event.target.dataset.code);
        codeChange(event.target);
    }

    function phoneFormat(input) {
        input = input.replace(/\D/g,'');
        var size = input.length;
        if (size>0) {input="("+input}
        if (size>3) {input=input.slice(0,4)+") "+input.slice(4,11)}
        if (size>6) {input=input.slice(0,9)+"-" +input.slice(9)}
        if (size>8) {input=input.slice(0,12)+"-" +input.slice(12)}
        return input;
    }

    const onTelInput = (event) => {
        event.target.value = phoneFormat(event.target.value);

    }

    return (
        <>
            <div className='telephone'>
                <div className='container'>
                    <div className='flags-container'>
                        <div className='flags' data-code="RU" onClick={handleFlagsClick}>
                            <ul>
                                <li data-code="RU" data-name="Russia" onClick={handleFlagClick}></li>
                                <li data-code="BY" data-name="Belarus" onClick={handleFlagClick}></li>
                                <li data-code="KZ" data-name="Kazakhstan" onClick={handleFlagClick}></li>
                            </ul>
                        </div>
                        <div className='dropdown-arrow' onClick={handleFlagsClick}></div>
                    </div>
                    <span className='code' data-code="RU" ref={telCode}>+7</span>
                    <input type='text' id='tel' placeholder='(905) 223-23-28' onChange={onTelInput} required />
                </div>
            </div>
        </>
    )
}

export default Telephone;