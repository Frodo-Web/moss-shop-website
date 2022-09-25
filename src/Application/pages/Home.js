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
					<div className="hero__content" data-content>
						<div className="hero__text">
							<img className="hero__footprint" src="./images/react/home/cyan-moss.jpg" alt="Озеленение стен мхом"></img>
								<h1 className="hero__title">На рынке больше 3-х лет</h1>
								<p className="hero__intro">Здравствуйте, меня зовут Андрей. Больше трёх лет занимаюсь стабилизацией растений в большинстве мхами! Производство в Санкт Петербурге. Выгодные тарифы на отправку по России и Казахстану.</p>
						</div>
					</div>
				</section>
				<section className='section funfact'>
					<header className="section__header">
						<h3 className="section__title">Факт</h3>
					</header>
					<div className="hero__content" data-content>
						<div className="hero__text">
							<img className="hero__footprint" src="./images/react/services/tv.jpg" alt="Красный стабилизированный мох Ягель"></img>
								<h1 className="hero__title">Для справки</h1>
								<p className="hero__intro">Стабилизированные растения – не искусственные и не сухоцветы. Это натуральные растения, у которых в результате специальной обработки природный сок замещается особым раствором на основе глицерина.</p>
						</div>
					</div>
				</section>
				<section className='section learn'>
					<header className="section__header">
						<h3 className="section__title">Подробнее</h3>
					</header>
					<div className="hero__content" data-content>
						<div className="hero__text">
							<img className="hero__footprint" src="./images/react/home/red-moss.jpg" alt="Циановый стабилизированный мох Ягель"></img>
								<h1 className="hero__title">Прочность, эластичность, без ухода</h1>
								<p className="hero__intro">Технологии позволяют подвергнуть подобной обработке практически все используемые флористами растения, при этом стабилизированные материалы отличаются уникальной прочностью и эластичностью, на вид совершенно ничем не отличаются от натуральных.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}