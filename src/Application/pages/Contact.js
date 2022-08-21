import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact'>
			<Info />
			<Slider />
		</div>
	)
};

export default Contact;

const Slider = () => {

	return (
		<div className="container">
			<div className="container__covers">
				<div className="container__cover"></div>
				<div className="container__cover"></div>
				<div className="container__cover"></div>
				<div className="container__cover"></div>
				<div className="container__cover"></div>
			</div>
			<div className="container__curtain"></div>
		</div>
	)
}

const Info = () => {
	return (
		<div className='info'>
			<div>Контакты</div>
			<div className='field'>
				<div>Режим работы</div>
				<div>Ежедневно с 10:00 до 20:00</div>
			</div>
			<div className='field'>
				<div>Телефон</div>
				<div>+7 (905) 223-23-27</div>
			</div>
			<div className='field'>
				<div>Группа ВК</div>
				<div><a href="https://vk.com/public211071107">vk.com/public211071107</a></div>
			</div>
		</div>
	)
}