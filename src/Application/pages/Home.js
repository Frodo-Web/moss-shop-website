import React, { useEffect, useRef } from 'react';
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

	const observer = useRef(undefined);

	const visualEffect = () => {
		const sections = [...document.querySelectorAll(".home main section")];
		let options = {
            rootMargin: "0px",
            threshold: 0.5
        };
		const callback = (entries, observer) => {
            entries.forEach(entry => {
                const { target } = entry;

                if (entry.intersectionRatio >= 0.5) {
                    target.classList.add("is-visible");
                } else {
                    target.classList.remove("is-visible");
                }
            });
        };
		if (observer && observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver(callback, options);
		sections.forEach((section, index) => {
            const sectionChildren = [...section.querySelector("[data-content] .hero__text").children];

            sectionChildren.forEach((el, index) => {
                el.style.setProperty("--delay", `${index * 250}ms`);
            });

            observer.current.observe(section);
        });
	};

	useEffect(() => {
		visualEffect();
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
							{/* <img className="hero__footprint" src="./images/react/home/kochanka.jpg" alt="Мох Кочанка"></img> */}
							    <img className="hero__footprint" src="./images/react/catalog/moss-yagel.jpg" alt="Мох Ягель"></img>
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
							<img className="hero__footprint" src="./images/react/home/cyan-moss-cropped-compressed.webp" alt="Озеленение стен мхом"></img>
								<h1 className="hero__title">На рынке больше 3-х лет</h1>
								<p className="hero__intro">Здравствуйте, меня зовут Андрей. Больше трёх лет занимаюсь стабилизацией растений в большинстве мхами!</p>
						</div>
					</div>
				</section>
				<section className='section funfact'>
					<header className="section__header">
						<h3 className="section__title">Факт</h3>
					</header>
					<div className="hero__content" data-content>
						<div className="hero__text">
							<img className="hero__footprint" src="./images/react/home/tv-cropped-compressed.webp" alt="Красный стабилизированный мох Ягель"></img>
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
							<img className="hero__footprint" src="./images/react/home/red-moss-cropped-compressed.webp" alt="Циановый стабилизированный мох Ягель"></img>
								<h1 className="hero__title">Прочность, эластичность, без ухода</h1>
								<p className="hero__intro">Технологии позволяют подвергнуть подобной обработке практически все используемые флористами растения, при этом стабилизированные материалы отличаются уникальной прочностью и эластичностью, на вид совершенно ничем не отличаются от натуральных.</p>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}