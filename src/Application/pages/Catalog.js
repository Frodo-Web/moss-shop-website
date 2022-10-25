import React, { useState } from 'react';
import './Catalog.css';
import OrderPopup from '../components/OrderPopup';

const Catalog = () => {
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
			price: event.target.parentNode.childNodes[3].childNodes[0].textContent
		})
		const orderPopupWrapper = document.getElementById('order-popup-wrapper');
		orderPopupWrapper.style.visibility = 'visible';
		orderPopupWrapper.classList.toggle("visible");
	}

	return (
		<div className='catalog'>
			<Grid handleClick={handleClick} />
			<OrderPopup order={order} />
		</div>
	)
};

export default Catalog;

const Grid = ({ handleClick }) => {

	return (
		<div className='grid'>
			<Cards handleClick={handleClick} />
		</div>
	)
}

const Card = ({ name, description, gallery, price, prevPrice, handleClick }) => {

	return (
		<>
			<div className='card'>
				<div></div>
				<div>{name}</div>
				<button data-description={description} data-gallery={gallery} onClick={handleClick}>Подробнее</button>
				<div>
					<div>{price} <span className='ruble'>₽</span></div>
					{prevPrice ? <div className='line-through'>{prevPrice} <span className='ruble'>₽</span></div> : ''}
				</div>
			</div>
		</>
	)

}

const Cards = ({ handleClick }) => {

	return (
		<>
			<Card
				name='Мох стабилизированный, Ягель'
				description='Мох стабилизированный Ягель. Производство в Санкт-Петербурге. Мох отборый крупный не укроп))) Выгодные тарифы на доставку.'
				gallery={['./images/react/catalog/moss-yagel.jpg', './images/react/catalog/moss-yagel2.jpg', './images/react/catalog/moss-yagel3.jpg', './images/react/catalog/moss-yagel4.jpg', './images/react/catalog/moss-yagel5.jpg', './images/react/catalog/moss-yagel6.jpg', './images/react/catalog/moss-yagel7.jpg', './images/react/catalog/moss-yagel8.jpg', './images/react/catalog/moss-yagel9.jpg', './images/react/catalog/moss-yagel10.jpg', './images/react/catalog/moss-yagel11.jpg', './images/react/catalog/moss-yagel12.jpg', './images/react/catalog/moss-yagel13.jpg', './images/react/catalog/moss-yagel14.jpg', './images/react/catalog/moss-yagel15.jpg',]}
				price='1,500'
				prevPrice='3,000'
				handleClick={handleClick}
			/>
			<Card
				name='Кочка европейская'
				description='Производство в Санкт-Петербурге. Выгодные тарифы на доставку.'
				gallery={['./images/react/catalog/kochanka-evropeiskaya.jpg',]}
				price='2,000'
				handleClick={handleClick}
			/>
			<Card
				name='Фито стены и озеленение помещений'
				description='Фито дизайн помещений. Выполняем стабилизированными растениями своего производства! Лучше цены в России! Любые формы оплаты!'
				gallery={['./images/react/services/tv.jpg', './images/react/services/wall1.jpg', './images/react/services/wall2.jpg', './images/react/services/wall3.jpg', './images/react/services/wall4.jpg', './images/react/services/wall5.jpg', './images/react/services/wall7.jpg', './images/react/services/wall8.jpg',]}
				price='10,000'
				handleClick={handleClick}
			/>
			<Card
				name='Озеленение помещений искусственными растениями'
				description='Выполнение озеленения помещений искуственными растениями премиум качества! Любые формы оплаты! Визуализации проектов! Лучшие цены на рынке!'
				gallery={['./images/react/services/ozelenenie-stabilizirovannimi.jpg', './images/react/services/tv2.jpg', './images/react/services/wall6.jpg', ]}
				price='18,000'
				handleClick={handleClick}
			/>
			<Card
				name='Мох в сотах'
				description='Мох в раме сотах чёрный графит. Размер от 22-32 см. Изготовление на заказ за один день.'
				gallery={['./images/react/catalog/moss-graphite-frame-2.jpg','./images/react/catalog/moss-graphite-frame-3.jpg','./images/react/catalog/moss-white-frame-1.jpg','./images/react/catalog/black-square-with-moss.jpg', './images/react/catalog/moss-frames-on-wall.jpg',]}
				price='1,300'
				prevPrice='1,600'
				handleClick={handleClick}
			/>
			{/* <Card
				name='Мох в Кашпо'
				description='Мох в кашпо ящик. Мох стабилизированный цвет зелёный.'
				price='1,000'
				handleClick={handleClick}
			/> */}
			{/* <Card
				name='Соты с мхом'
				description='Соты размером от 22 см до 32 см. Окраска в любой цвет или обработка маслом. Мох по согласованию.'
				gallery={['./images/react/catalog/1.svg','./images/react/catalog/2.svg','./images/react/catalog/3.svg','./images/react/catalog/4.svg','./images/react/catalog/5.svg',]}
				price='1,300'
				prevPrice='1,600'
				handleClick={handleClick}
			/> */}
			<Card
				name='Фито композиции'
				description='Спил грецкого ореха,. Обработка маслом. Мох по желанию.'
				gallery={['./images/react/catalog/moss-kashpo-1.jpg',]}
				price='от 3,000'
				handleClick={handleClick}
			/>
			{/* <Card
				name='Чёрный квадрат с мхом'
				description='Полка квадрат с наполнением мха цвета лайм'
				gallery={['./images/react/catalog/1.svg','./images/react/catalog/2.svg','./images/react/catalog/3.svg','./images/react/catalog/4.svg','./images/react/catalog/5.svg',]}
				price='1,300'
				handleClick={handleClick} /> */}
			<Card
				name='Панно Семья'
				description='Панно Семья изготовление два три дня ( если нет в наличии) цвет чёрный графит( можно любой) мох зелёный
				 (можно на выбор при наличии) Размер 1000*500( возможно других размеров) Также можно поменять семью по возрастанию детей'
				gallery={['./images/react/catalog/panno-family2.jpg',]}
				price='6,000'
				handleClick={handleClick}
			/>
			<Card
				name='Папоротник'
				description='Папоротник стабилизированный производства Россия. Цвет в жизни не такой яркий как на фото. Отправка по России'
				gallery={[]}
				price='130'
				prevPrice='200'
				handleClick={handleClick}
			/>
			{/* <Card
				name='Эвкалипт бэби, стабилизированный'
				description='Эвкалипт стабилизированный. Сорт бэби блю. Цена за ветку.'
				price='450'
				handleClick={handleClick}
			/>
			<Card
				name='Эвкалипт стабилизированный'
				description='Эвкалипт цинерея стабилизированный. От 200 руб за ветку'
				price='300'
				handleClick={handleClick}
			/> */}
			{/* <Card
				name='Мох пластовый, стабилизированный'
				description='Мох пластовой стабилизированный. В продаже от 0,25 метра квадратного. Цена указана за метр квадратный'
				price='300'
				handleClick={handleClick}
			/> */}
		</>
	)
}
