import React, { useState } from 'react';
import './Catalog.css';
import OrderPopup from '../components/OrderPopup';

const Catalog = () => {
	const orderFormData = Object.freeze({
		image: "",
		name: "",
		description: "",
		price: ""
	});
	const [order, setOrder] = useState(orderFormData);

	const handleClick = (event) => {
		setOrder({
			image: getComputedStyle(event.target.parentNode.childNodes[0]).backgroundImage,
			name: event.target.parentNode.childNodes[1].textContent,
			description: event.target.dataset.description,
			price: event.target.parentNode.childNodes[3].childNodes[0].textContent
		})
		document.getElementById('order-popup-wrapper').style.visibility = 'visible';
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

const Card = ({ name, description, price, prevPrice, handleClick }) => {

	return (
		<>
			<div className='card'>
				<div></div>
				<div>{name}</div>
				<button data-description={description} onClick={handleClick}>Подробнее</button>
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
				name='Мох в сотах'
				description='Мох в раме сотах чёрный графит. Размер от 22-32 см. Изготовление на заказ за один день.'
				price='1,300'
				prevPrice='1,600'
				handleClick={handleClick}
			/>
			<Card
				name='Мох в Кашпо'
				description='Мох в кашпо ящик. Мох стабилизированный цвет зелёный.'
				price='1,000'
				handleClick={handleClick}
			/>
			<Card
				name='Соты с мхом'
				description='Соты размером от 22 см до 32 см. Окраска в любой цвет или обработка маслом. Мох по согласованию.'
				price='1,300'
				prevPrice='1,600'
				handleClick={handleClick}
			/>
			<Card
				name='Мох стабилизированный, Ягель'
				description='Мох стабилизированный Ягель. Производство в Санкт-Петербурге. Мох отборый крупный не укроп))) Выгодные тарифы на доставку.'
				price='2,000'
				prevPrice='3,000'
				handleClick={handleClick}
			/>
			<Card
				name='Композиция из мха'
				description='Спил грецкого ореха,. Обработка маслом. Мох по желанию.'
				price='3,000'
				handleClick={handleClick}
			/>
			<Card
				name='Чёрный квадрат с мхом'
				description='Полка квадрат с наполнением мха цвета лайм'
				price='1,300'
				handleClick={handleClick} />
			<Card
				name='Панно Семья'
				description='Панно Семья изготовление два три дня ( если нет в наличии) цвет чёрный графит( можно любой) мох зелёный
				 (можно на выбор при наличии) Размер 1000*500( возможно других размеров) Также можно поменять семью по возрастанию детей'
				price='8,000'
				handleClick={handleClick}
			/>
			<Card
				name='Папоротник'
				description='Папоротник стабилизированный производства Россия. Цвет в жизни не такой яркий как на фото. Отправка по России'
				price='130'
				prevPrice='200'
				handleClick={handleClick}
			/>
			<Card
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
			/>
			<Card
				name='Мох пластовый, стабилизированный'
				description='Мох пластовой стабилизированный. В продаже от 0,25 метра квадратного. Цена указана за метр квадратный'
				price='300'
				handleClick={handleClick}
			/>
		</>
	)
}
