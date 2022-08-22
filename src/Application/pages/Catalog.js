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
				<div>1,300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох в Кашпо</div>
				<div>1,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Соты с мхом</div>
				<div>1,300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох стабилизированный, Ягель</div>
				<div>2,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Композиция из мха</div>
				<div>3,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Чёрный квадрат с мхом</div>
				<div>1,300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Панно Семья</div>
				<div>8,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Папоротник</div>
				<div>130 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт бэби, стабилизированный</div>
				<div>450 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Эвкалипт стабилизированный</div>
				<div>300 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Мох пластовый, стабилизированный</div>
				<div>300 ₽</div>
			</div>

		</>
	)
}