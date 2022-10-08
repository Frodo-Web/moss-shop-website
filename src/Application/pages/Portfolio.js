import React, { useRef, useEffect } from 'react';
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
			<GridFour />
		</div>
	)
}

const GridOne = () => {

	return (
		<div className='grid-one'>
			<Example image="./images/react/portfolio/moss-kashpo.jpg" title={'Мох в кашпо'} category={'Продукты'} />
			<Example image="./images/react/portfolio/wall.webp" title={'Озеленение стен в офисе'} category={'Сервис'} />
			<Example image="./images/react/home/tv-cropped-compressed.webp" title={'Озеленение стен в помещениях'} category={'Сервис'}/>
		</div>
	)
}

const GridTwo = () => {
	return (
		<div className='grid-two'>
			<Example image="./images/react/portfolio/wall2.webp" title={'Озеленение стен в офисе'} category={'Сервис'} />
			<Example image="./images/react/portfolio/wall3.webp" title={'Озеленение стен на предприятии'} category={'Сервис'} />
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

const GridFour = () => {
	return (
		<div className='grid-four'>
			<Example image="./images/react/catalog/moss-yagel3.jpg" title={'Стабилизированные мхи'} category={'Продукты'} />
			<Example image="./images/react/catalog/moss-yagel4.jpg" title={'Стабилизированные мхи'} category={'Продукты'} />
			<Example image="./images/react/catalog/moss-yagel5.jpg" title={'Стабилизированные мхи'} category={'Продукты'} />
			<Example image="./images/react/catalog/moss-yagel9.jpg" title={'Стабилизированные мхи'} category={'Продукты'} />
		</div>
	)
}

const Example = ({ image, title, category }) => {

	const hoverContent = useRef(undefined);
	const staticCaption = useRef(undefined);

	useEffect(() => {
		is_needed();
	}, [])

	const detect_touch_device = () => {
		return (window.matchMedia("(pointer: coarse)").matches) ? true : false;
	}

	const is_needed = () => {
		if(window.innerWidth <= 550 || detect_touch_device()) {
			if(staticCaption && staticCaption.current) 	{
				staticCaption.current.classList.add('is-visible');
				staticCaption.current.parentNode.childNodes[0].style.transition = 'unset'; // Turn off scale transition on img
			};
		}
	}

	const handleMove = (e) => {
		if (window.innerWidth <= 550 || detect_touch_device()) {
			hoverContent.current.classList.remove('is-visible');
		} else {
			if (e.target.tagName === 'IMG' && hoverContent && hoverContent.current) {
				// const x = e.pageX;
				// const y = e.pageY;
				// const rect = e.target.getBoundingClientRect();
				// const x = e.pageX - rect.left; 
				// const y = e.pageY - rect.top;
				// const y = e.pageY;
				const x = e.pageX - e.currentTarget.offsetLeft; 
				const y = e.pageY - e.currentTarget.offsetTop; 
				hoverContent.current.style.transform = `translate3d(${x - 80}px, ${y - 40}px, 0)`;
				hoverContent.current.classList.add('is-visible');
			}
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
			<figcaption className="img-content" ref={staticCaption}>
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