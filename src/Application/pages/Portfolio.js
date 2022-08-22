import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<ScrollHit />
			<Examples />
		</div>
	)
};

export default Portfolio;

const Examples = () => {

	return (
		<div>	
			<section><h1>Озеленение стен</h1></section>
			<section></section>
			<section></section>
			<section></section>

			<section><h1>Панно Семья</h1></section>
			
			<section><h1>Стол переговоров</h1></section>
		</div>
	)
}

const ScrollHit = () => {

	return (
		<div className='scroll'></div>
	)
}