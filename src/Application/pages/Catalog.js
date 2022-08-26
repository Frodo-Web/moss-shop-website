import React, { useState } from 'react';
import './Catalog.css';
import OrderPopup from '../components/OrderPopup';

const orderFormData = Object.freeze({
	image: "",
	name: "",
	description: "",
	price: ""
});

const Catalog = () => {
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

const Cards = ({ handleClick }) => {

	return (
		<>
			<div className='card'>
				<div></div>
				<div>Мох в сотах</div>
				<button data-description='Мох в раме сотах чёрный графит. Размер от 22-32 см. Изготовление на заказ за один день.' onClick={handleClick}>Подробнее</button>
				<div>
					<div>1,300 ₽</div>
					<div className='line-through'>1,600 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох в Кашпо</div>
				<button data-description='Мох в кашпо ящик. Мох стабилизированный цвет зелёный.' onClick={handleClick}>Подробнее</button>
				<div>
					<div>1,000 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Соты с мхом</div>
				<button data-description='Соты размером от 22 см до 32 см. Окраска в любой цвет или обработка маслом. Мох по согласованию.' onClick={handleClick}>Подробнее</button>
				<div>
					<div>1,300 ₽</div>
					<div className='line-through'>1,600 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох стабилизированный, Ягель</div>
				<button data-description='Мох стабилизированный Ягель. Производство в Санкт-Петербурге. Мох отборый крупный не укроп))) Выгодные тарифы на доставку. ' onClick={handleClick}>Подробнее</button>
				<div>
					<div>2,000 ₽ </div>
					<div className='line-through'>3,000 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Композиция из мха</div>
				<button data-description='Спил грецкого ореха,. Обработка маслом. Мох по желанию.' onClick={handleClick}>Подробнее</button>
				<div>
					<div>3,000 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Чёрный квадрат с мхом</div>
				<button data-description='Полка квадрат с наполнением мха цвета лайм ' onClick={handleClick}>Подробнее</button>
				<div>
					<div>1,300 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Панно Семья</div>
				<button data-description='Панно Семья изготовление два три дня ( если нет в наличии) цвет чёрный графит( можно любой) мох зелёный (можно на выбор при наличии) Размер 1000*500( возможно других размеров) Также можно поменять семью по возрастанию детей' onClick={handleClick}>Подробнее</button>
				<div>
					<div>8,000 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Папоротник</div>
				<button data-description='Папоротник стабилизированный производства Россия. Цвет в жизни не такой яркий как на фото. Отправка по России ' onClick={handleClick}>Подробнее</button>
				<div>
					<div>130 ₽ </div>
					<div className='line-through'>200 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт бэби, стабилизированный</div>
				<button data-description='Эвкалипт стабилизированный. Сорт бэби блю. Цена за ветку.' onClick={handleClick}>Подробнее</button>
				<div>
					<div>450 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт стабилизированный</div>
				<button data-description='Эвкалипт цинерея стабилизированный. От 200 руб за ветку' onClick={handleClick}>Подробнее</button>
				<div>
					<div>300 ₽</div>
				</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох пластовый, стабилизированный</div>
				<button data-description='Мох пластовой стабилизированный. В продаже от 0,25 метра квадратного. Цена указана за метр квадратный' onClick={handleClick}>Подробнее</button>
				<div>
					<div>300 ₽</div>
				</div>
			</div>

		</>
	)
}