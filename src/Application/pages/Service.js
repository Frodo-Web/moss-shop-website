import React, { useState } from 'react';
import './Service.css';
import OrderPopup from '../components/OrderPopup';

const Service = () => {
	const orderFormData = Object.freeze({
		image: "",
		name: "",
		description: "",
		gallery: [],
		price: ""
	});
	const [order, setOrder] = useState(orderFormData);

	const handleClick = (event) => {
		let gallery = [];
		if (event.target.dataset.gallery && event.target.dataset.gallery.length > 0) gallery = event.target.dataset.gallery.split(',');
		setOrder({
			image: getComputedStyle(event.target.parentNode.childNodes[0]).backgroundImage,
			name: event.target.parentNode.childNodes[1].textContent,
			description: event.target.dataset.description,
			gallery: gallery,
			price: event.target.parentNode.childNodes[3].textContent
		})
		const orderPopupWrapper = document.getElementById('order-popup-wrapper');
		orderPopupWrapper.style.visibility = 'visible';
		orderPopupWrapper.classList.toggle("visible");
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

const Grid = ({ handleClick }) => {

	return (
		<div className='grid'>
			<Cards handleClick={handleClick} />
		</div>
	)
}

const Card = ({ name, description, gallery, price, handleClick }) => {

	return (
		<>
			<div className='card'>
				<div></div>
				<div>{name}</div>
				<button data-description={description} data-gallery={gallery} onClick={handleClick}>Подробнее</button>
				<div>
					<div>{price} <span className='ruble'>₽</span></div>
					{/* {prevPrice ? <div className='line-through'>{prevPrice} <span className='ruble'>₽</span></div> : ''} */}
				</div>
			</div>
		</>
	)

}

// const Cards = ({handleClick}) => {

// 	return (
// 		<>
// 			<div className='card'>
// 				<div></div>
// 				<div>Озеленение помещений искусственными растениями</div>
// 				<button data-description='Выполнение озеленения помещений искуственными растениями премиум качества! Любые формы оплаты! Визуализации проектов! Лучшие цены на рынке!' onClick={handleClick}>Подробнее</button>
// 				<div>18,000 <span className='ruble'>₽</span></div>
// 			</div>
// 			<div className='card'>
// 				<div></div>
// 				<div>Фито дизайн интерьера</div>
// 				<button data-description='Фито дизайн помещений. Выполняем стабилизированными растениями своего производства! Лучше цены в России! Любые формы оплаты!' onClick={handleClick}>Подробнее</button>
// 				<div>10,000 <span className='ruble'>₽</span> за m²</div>
// 			</div>
// 		</>
// 	)
// }

const Cards = ({ handleClick }) => {
	return (
		<>
			<Card
				name='Озеленение помещений искусственными растениями'
				description='Выполнение озеленения помещений искуственными растениями премиум качества! Любые формы оплаты! Визуализации проектов! Лучшие цены на рынке!'
				gallery={['./images/react/catalog/1.svg', './images/react/catalog/2.svg', './images/react/catalog/3.svg', './images/react/catalog/4.svg', './images/react/catalog/5.svg',]}
				price='18,000'
				handleClick={handleClick}
			/>
			<Card
				name='Фито стены и озеленение помещений'
				description='Фито дизайн помещений. Выполняем стабилизированными растениями своего производства! Лучше цены в России! Любые формы оплаты!'
				gallery={['./images/react/catalog/1.svg', './images/react/catalog/2.svg', './images/react/catalog/3.svg', './images/react/catalog/4.svg', './images/react/catalog/5.svg',]}
				price='10,000'
				handleClick={handleClick}
			/>
		</>
	)
}