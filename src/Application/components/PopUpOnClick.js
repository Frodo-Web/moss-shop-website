import React, { useRef } from 'react';
import './PopUpOnClick.css';

const PopUpOnClick = () => {
	const popupClick = useRef(undefined);
	const popupWrapper = useRef(undefined);

	const handlePopupClick = () => {
		popupClick.current.classList.remove('is-visible');
		if (popupWrapper && popupWrapper.current) {
			popupWrapper.current.classList.add('is-visible');
		}
	}
	const handleWrapperEvent = () => {
		popupWrapper.current.classList.remove('is-visible');
		if (popupClick && popupClick.current) {
			popupClick.current.classList.add('is-visible');
		}
	}

	return (
		<>
			<div className='popup-click is-visible' ref={popupClick} onClick={handlePopupClick}>
				<div className='circle'>
				</div>
			</div>
			<div className='popup-form-wrapper' ref={popupWrapper} onClick={handleWrapperEvent} onWheel={handleWrapperEvent} onTouchMove={handleWrapperEvent}>
				<div className='popup-form'>
					<div>Обратная связь</div>
					<div>
						<a target="_blank" rel="noopener noreferrer" href="https://wa.me/79052232327">Написать WhatsApp</a>
					</div>
					<div>
						<a target="_blank" rel="noopener noreferrer" href="https://vk.com/public211071107">Задайте вопрос в нашей группе Вконакте</a>
					</div>
				</div>
			</div>
		</>
	)
};

export default PopUpOnClick;