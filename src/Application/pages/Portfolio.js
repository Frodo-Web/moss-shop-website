import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<Grids />
		</div>
	)
};

export default Portfolio;

const Grids = () => {

	return (
		<div className='portfolio-grids'>
			<GridOne />
			<GridTwo />
			<GridThree />
		</div>
	)
}

const GridOne = () => {

	return (
		<div className='grid-one'>
			<Example image="./images/react/portfolio/moss-kashpo.jpg" />
			<Example image="./images/react/portfolio/wall.webp" />
			<Example image="./images/react/home/tv-cropped-compressed.webp" />
		</div>
	)
}

const GridTwo = () => {
	return (
		<div className='grid-two'>
			<Example image="./images/react/portfolio/wall2.webp" />
			<Example image="./images/react/portfolio/wall3.webp" />
		</div>
	)
}

const GridThree = () => {
	return (
		<div className='grid-three'>
			<Example image="./images/react/portfolio/table.jpg" />
		</div>
	)
}

const Example = ({ image, title, category }) => {
	return (
		<figure className="img-container">
			<img src={image}></img>
			<figcaption className="img-content">
				<h2 className="title">{title}</h2>
				<h3 className="category">{category}</h3>
			</figcaption>
		</figure>
	)
}