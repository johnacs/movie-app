import React, { useEffect, useState } from 'react';
import './styles.css';
import Movies from './components/Movies';
import Movie from './components/Movie';

function App() {
	const [ movies, setMovies ] = useState([]);
	const [ errorMsg, setErrorMsg ] = useState(false);
	useEffect(() => {
		const apiUrl = 'https://sometimes-maybe-flaky-api.gdshive.io/';

		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				console.log(data);
				setMovies(data);
			} catch (err) {
				setErrorMsg(true);
			}
		};

		fetchData();
	}, []);

	return (
		<div className='App'>
			<h1>App</h1>
			{movies.map((movie, index) => {
				return <Movie key={index} detail={movie} />;
			})}
		</div>
	);
}

export default App;
