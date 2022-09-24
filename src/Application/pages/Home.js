import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {

	return (
		<div className='home'>
			<Content />
		</div>
	)
};

export default Home;

const Content = () => {

	useEffect(() => {

	}, [])

	return (
		<>
			<main>
				<section className='section hero'>
					<header className="section__header">
						<h3 className="section__title">О компании</h3>
					</header>
					<div className="hero__bg">
						<img className="hero__img" src="./images/react/home/section4-1-touch.jpg"></img>
					</div>
					<div className="hero__content" data-content>
						<div className="hero__text">
							<img className="hero__footprint" src="./images/react/home/kochanka.jpg" alt="Мох Кочанка"></img>
								<h1 className="hero__title">Mox'Pro</h1>
								<p className="hero__intro">Мы производство стабилизированного мха и растений. Изготавливаем фито стены и композиции из растений без ухода</p>
						</div>
					</div>
				</section>
				<section className='section intro'>
					<header className="section__header">
						<h3 className="section__title">Введение</h3>
					</header>
					<div className="section__content" data-content>
						test test test
					</div>
				</section>
				<section className='section funfact'>
					<header className="section__header">
						<h3 className="section__title">Факт</h3>
					</header>
					<div className="section__content" data-content>
					</div>
				</section>
				<section className='section learn'>
					<header className="section__header">
						<h3 className="section__title">Подробнее</h3>
					</header>
					<div className="section__content" data-content>
					</div>
				</section>
			</main>
		</>
	)
}