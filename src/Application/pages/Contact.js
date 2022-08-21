import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<div className='contact'>
			<Slider />
		</div>
	)
};

export default Contact;

const Slider = () => {

	return (
		<div class="container">
			<div class="container__covers">
				<div class="container__cover"></div>
				<div class="container__cover"></div>
				<div class="container__cover"></div>
				<div class="container__cover"></div>
				<div class="container__cover"></div>
			</div>
			<div class="container__curtain"></div>
		</div>
	)
}

const Info = () => {
	return (
		<div className='info'>
			<div>Контакты</div>
			<div>Режим работы</div>
			<div>Ежедневно с 10:00 до 20:00</div>
			<div>Телефон</div>
			<div>+7 (905) 223-23-27</div>
			<div>Группа ВК</div>
			<div><a href="https://vk.com/public211071107">vk.com/public211071107</a></div>
		</div>
	)
}