import React from 'react';
import './Service.css';

const Service = () => {
	return (
		<div className='service'>
			<Grid />
		</div>
	)
};

export default Service;

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
				<div>Озеленение помещений искусственными растениями</div>
				<button>Подробнее</button>
				<div>18,000 ₽</div>
			</div>
			<div className='card'>
				<div></div>
				<div>Фито дизайн интерьера</div>
				<button>Подробнее</button>
				<div>10,000 ₽ за m²</div>
			</div>
		</>
	)
}