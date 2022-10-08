import React, { useRef } from 'react';
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
			<Example image="./images/react/portfolio/moss-kashpo.jpg" title={'Мох в кашпо'} category={'Продукты'} />
			<Example image="./images/react/portfolio/wall.webp" title={'Озеленение стен в офисе'} category={'Сервис'} />
			<Example image="./images/react/home/tv-cropped-compressed.webp" title={'Озеленение стен в офисе'} category={'Сервис'}/>
		</div>
	)
}

const GridTwo = () => {
	return (
		<div className='grid-two'>
			<Example image="./images/react/portfolio/wall2.webp" title={'Озеленение стен в офисе'} category={'Сервис'} />
			<Example image="./images/react/portfolio/wall3.webp" title={'Озеленение стен в офисе'} category={'Сервис'} />
		</div>
	)
}

const GridThree = () => {
	return (
		<div className='grid-three'>
			<Example image="./images/react/portfolio/table.jpg" title={'Стол с мхом'} category={'Продукты'} />
		</div>
	)
}

const Example = ({ image, title, category }) => {

	const hoverContent = useRef(undefined);

	const handleMove = (e) => {
		if (e.target.tagName === 'IMG' && hoverContent && hoverContent.current) {
			const x = e.pageX;
			const y = e.pageY;
			hoverContent.current.style.transform = `translate3d(${x - 80}px, ${y - 40}px, 0)`;
			hoverContent.current.classList.add('is-visible');
		}
	}
	const handleOut = (e) => {
		if (e.target.tagName === 'IMG' && hoverContent && hoverContent.current) {
			hoverContent.current.classList.remove('is-visible');
		}
	}
	return (
		<figure className="img-container" onMouseMove={handleMove} onMouseOut={handleOut}>
			<img src={image}></img>
			<figcaption className="img-content">
				<h2 className="title">{title}</h2>
				<h3 className="category">{category}</h3>
			</figcaption>
			<span className="img-content-hover" ref={hoverContent}>
				<h2 className="title">{title}</h2>
				<h3 className="category">{category}</h3>
			</span>
		</figure>
	)
}