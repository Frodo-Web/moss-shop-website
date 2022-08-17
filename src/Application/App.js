import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
import PopUpOnClick from './components/PopUpOnClick';

const App = () => {

	return (
		<div className='moss-shop-wrapper'>
			<Layout />
			<PopUps />
		</div>
	)
};

export default App;

const Layout = () => {

	return (
		<div className='app'>
			<Header />
			<Body />
			<Footer />
		</div>
	)
}

const PopUps = () => {

	return (
		<div className='popUps'>
			<PopUp />
			<PopUpOnClick />
		</div>
	)
}