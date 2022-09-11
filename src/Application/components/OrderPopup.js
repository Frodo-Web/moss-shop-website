import React from 'react';
import './OrderPopup.css';

const OrderPopup = ({ order }) => {

    const image = order.image;
    const name = order.name;
    const description = order.description;
    const gallery = order.gallery;
    const price = order.price;
    const handleWrapperClick = (event) => {
        if (event.target.id === 'order-popup-wrapper') {
            event.target.style.visibility = "hidden";
            event.target.classList.toggle("visible");
        }

    };
    const handleCloseClick = (event) => {
        if (event.target.id === 'order-popup-wrapper-close') {
            event.target.parentNode.style.visibility = "hidden";
            event.target.parentNode.classList.toggle("visible");
        }
    }

    return (
        <div id='order-popup-wrapper' onClick={handleWrapperClick}>
            <div id='order-popup-wrapper-close' className='close' onClick={handleCloseClick}></div>
            <Form image={image} name={name} description={description} gallery={gallery} price={price} />
        </div>
    )
}

export default OrderPopup;

const Form = ({ image, name, description, gallery, price }) => {
    const handleOrderClick = (event) => {
        event.target.previousSibling.textContent = 'Спасибо за заказ! В ближайшее время мы с вами свяжемся.'
    }
    const style = {
        backgroundImage: image,
    };

    return (
        <div className='form'>
            {/* <div className="left-column" style={style}></div> */}
            <div className="left-column">
                <div className="selected-image" style={style}></div>
                <div className='images'>
                    {/* <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> */}
                    <div style={style}></div>
                    {gallery && gallery.map((img, idx) => <div key={idx} style={{backgroundImage:`url(${img})`}}></div>)}
                </div>
            </div>
            <div className="right-column">
                <div>{name}</div>
                <div>{description}</div>
                <div>{price}</div>
                <form className='inputs'>
                    <label htmlFor='tel'>Укажите ваш номер: </label>
                    <input id='tel' placeholder='+7 (905) 223-23-28' required />
                    <label htmlFor='wishes'>Ваши пожелания: </label>
                    <textarea id='wishes'></textarea>
                    <div></div>
                    <button onClick={handleOrderClick} type="submit">Заказать</button>
                </form>
            </div>

        </div>
    )
}