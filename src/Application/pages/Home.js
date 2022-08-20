import React from 'react';
import './Home.css';

const Home = () => {
	const handleClick = () => {
		document.querySelector('body').classList.toggle("black-theme");
	}
	return (
		<>
			<h2>Home</h2>
			<button onClick={handleClick}>Toggle</button>
		</>
	)
};

export default Home;