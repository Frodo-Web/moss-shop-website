import React, {useRef} from 'react';
import './OrderPopup.css';

const OrderPopup = ({ order }) => {

    const firstElement = useRef(null);

    const image = order.image;
    const name = order.name;
    const description = order.description;
    const gallery = order.gallery;
    const price = order.price;
    const resetActive = () => {
        firstElement.current.parentNode.childNodes.forEach((element) => element.classList.remove("active"));
        firstElement.current.classList.add("active");
    }
    const handleWrapperClick = (event) => {
        if (event.target.id === 'order-popup-wrapper') {
            event.target.style.visibility = "hidden";
            event.target.classList.toggle("visible");
            resetActive();
        }

    };
    const handleCloseClick = (event) => {
        if (event.target.id === 'order-popup-wrapper-close') {
            event.target.parentNode.style.visibility = "hidden";
            event.target.parentNode.classList.toggle("visible");
            resetActive();
        }
    }

    return (
        <div id='order-popup-wrapper' onClick={handleWrapperClick}>
            <div id='order-popup-wrapper-close' className='close' onClick={handleCloseClick}></div>
            <Form image={image} name={name} description={description} gallery={gallery} price={price} firstElement={firstElement}/>
        </div>
    )
}

export default OrderPopup;

const Form = ({ image, name, description, gallery, price, firstElement }) => {

    const handleOrderClick = (event) => {
        event.target.previousSibling.textContent = 'Спасибо за заказ! В ближайшее время мы с вами свяжемся.'
    }
    const style = (image) => {
       return { backgroundImage: image }
    };

    const handleGalleryClick = (event) => {
        event.target.parentNode.childNodes.forEach((element) => element.classList.remove("active"));
        event.target.classList.add("active");
        const targetImage = getComputedStyle(event.target).backgroundImage;
        event.target.parentNode.previousSibling.style.backgroundImage = targetImage;
    }

    return (
        <div className='form'>
            <div className="left-column">
                <div className="selected-image" style={style(image)}></div>
                <div className='images'>
                    <div style={style(image)} onClick={handleGalleryClick} className='active' ref={firstElement}></div>
                    {gallery && gallery.map((img, idx) => <div key={idx} style={{backgroundImage:`url(${img})`}} onClick={handleGalleryClick}></div>)}
                </div>
            </div>
            <div className="right-column">
                <div>{name}</div>
                <div>{description}</div>
                {/* <div>{price}</div> */}
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