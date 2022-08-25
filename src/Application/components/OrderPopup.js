import React from 'react';
import './OrderPopup.css';

const OrderPopup = ({ order }) => {

    const image = order.image;
    const name = order.name;
    const description = order.description;
    const price = order.price;
    const handleWrapperClick = (event) => {
        if (event.target.parentNode.className !== "form" 
        && event.target.className !== "form"
        && event.target.parentNode.className !== "right-column"
        && event.target.parentNode.className !== "left-column"
        && event.target.parentNode.className !== "inputs") event.target.style.visibility = "hidden";
    }

    return (
        <div id='order-popup-wrapper' onClick={handleWrapperClick}>
            <Form image={image} name={name} description={description} price={price} />
        </div>
    )
}

export default OrderPopup;

const Form = ({ image, name, description, price }) => {
    const style = {
        backgroundImage: image,
    };

    return (
        <div className='form'>
            <div className="left-column" style={style}></div>
            <div className="right-column">
                <div>{name}</div>
                <div>{description}</div>
                <div>{price}</div>
                <div className='inputs'>
                    <label htmlFor='tel'>Ваш номер: </label>
                    <input id='tel' placeholder='+7 (905) 223-23-27' />
                </div>
                <button type="button">Заказать</button>
            </div>

        </div>
    )
}