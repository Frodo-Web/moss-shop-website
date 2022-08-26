import React, {useState} from 'react';
import './Service.css';
import OrderPopup from '../components/OrderPopup';

const orderFormData = Object.freeze({
    image: "",
    name: "",
	description: "",
	price: ""
});

const Service = () => {
	const [order, setOrder] = useState(orderFormData);
	const handleClick = (event) => {
		setOrder({
			image: getComputedStyle(event.target.parentNode.childNodes[0]).backgroundImage, 
			name: event.target.parentNode.childNodes[1].textContent,
			description: event.target.dataset.description,
			price: event.target.parentNode.childNodes[3].textContent
		})
		document.getElementById('order-popup-wrapper').style.visibility = 'visible';
		// console.log(getComputedStyle(event.target.parentNode.childNodes[0]).backgroundImage, event.target.parentNode.childNodes[1].textContent, event.target.parentNode.childNodes[3].textContent);
	}
	return (
		<div className='service'>
			<Grid handleClick={handleClick} />
			<OrderPopup order={order} />
		</div>
	)
};

export default Service;

const Grid = ({handleClick}) => {

	return (
		<div className='grid'>
			<Cards handleClick={handleClick} />
		</div>
	)
}

const Cards = ({handleClick}) => {
	
	return (
		<>
			<div className='card'>
				<div></div>
				<div>Озеленение помещений искусственными растениями</div>
				<button data-description='Выполнение озеленения помещений искуственными растениями премиум качества! Любые формы оплаты! Визуализации проектов! Лучшие цены на рынке!' onClick={handleClick}>Подробнее</button>
				<div>18,000 <span className='ruble'>₽</span></div>
			</div>
			<div className='card'>
				<div></div>
				<div>Фито дизайн интерьера</div>
				<button data-description='Фито дизайн помещений. Выполняем стабилизированными растениями своего производства! Лучше цены в России! Любые формы оплаты!' onClick={handleClick}>Подробнее</button>
				<div>10,000 <span className='ruble'>₽</span> за m²</div>
			</div>
		</>
	)
}