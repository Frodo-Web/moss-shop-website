import React from 'react';
import './Catalog.css';

const Catalog = () => {
	return (
		<div className='catalog'>
			<Grid />
		</div>
	)
};

export default Catalog;

const Grid = () => {

	return (
		<div className='grid'>
			<Cards />
		</div>
	)
}

const Cards = () => {

	return (
		<>
			<div className='card'>
				<div></div>
				<div>Мох в сотах</div>
				<button>Подробнее</button>
				<div>1,300 ₽ <div className='line-through'>1,600 ₽</div></div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох в Кашпо</div>
				<button>Подробнее</button>
				<div>1,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Соты с мхом</div>
				<button>Подробнее</button>
				<div>1,300 ₽ <div className='line-through'>1,600 ₽</div></div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох стабилизированный, Ягель</div>
				<button>Подробнее</button>
				<div>2,000 ₽ <div className='line-through'>3,000 ₽</div></div>
			</div>
			<div className='card'>
				<div></div>
				<div>Композиция из мха</div>
				<button>Подробнее</button>
				<div>3,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Чёрный квадрат с мхом</div>
				<button>Подробнее</button>
				<div>1,300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Панно Семья</div>
				<button>Подробнее</button>
				<div>8,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Папоротник</div>
				<button>Подробнее</button>
				<div>130 ₽ <div className='line-through'>200 ₽</div></div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт бэби, стабилизированный</div>
				<button>Подробнее</button>
				<div>450 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт стабилизированный</div>
				<button>Подробнее</button>
				<div>300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох пластовый, стабилизированный</div>
				<button>Подробнее</button>
				<div>300 ₽</div>
			</div>

		</>
	)
}