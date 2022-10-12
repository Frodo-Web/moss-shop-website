import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import PopUp from './components/PopUp';
import PopUpOnClick from './components/PopUpOnClick';
import Loader from './components/Loader';
import calculateViewportUnits from './helpers/calculateViewportUnits';

const App = () => {

	useEffect(() => {
		calculateViewportUnits();
	}, [])

	return (
		<>
			<Loader />
			<div className='moss-shop-wrapper'>
				<Layout />
				<PopUp />
				<PopUpOnClick />
			</div>
		</>
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
