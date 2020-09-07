import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';

function App() {
	return (
		<Router>
			<div>
				{/* <NavBar /> */}
				<HeroBanner />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/movie/' component={MovieDetail} />
					<Route path='/movies' component={Movies} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
