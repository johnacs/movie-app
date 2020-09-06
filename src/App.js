import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.css';
import Movies from './pages/Movies';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	}
}));

function App() {
	// const classes = useStyles();

	// const [ movies, setMovies ] = useState([]);
	// const [ errorMsg, setErrorMsg ] = useState(false);
	// const [ loading, setLoading ] = useState(false);

	// useEffect(() => {
	// 	const apiUrl = 'https://sometimes-maybe-flaky-api.gdshive.io/';

	// 	const fetchData = async () => {
	// 		try {
	// 			setLoading(true);
	// 			const response = await fetch(apiUrl);
	// 			const data = await response.json();
	// 			console.log(data);
	// 			setMovies(data);
	// 			setLoading(false);
	// 		} catch (err) {
	// 			setErrorMsg(true);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	// if (loading) return <h1>Loading movie listing...</h1>;

	return (
		<Router>
			<div>
				<NavBar />
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
