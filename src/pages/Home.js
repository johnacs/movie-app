import React from 'react';
import MovieList from '../components/MovieList';
import GenreBar from '../components/GenreBar';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useFetchApi from '../utilities/fetchApi';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SelectGenre from '../components/SelectGenre';
import GenreMenu from '../components/GenreMenu';
import NavBar from '../components/NavBar';

const MOVIES_ENDPOINT = 'https://sometimes-maybe-flaky-api.gdshive.io/';

function Home() {
	const { movies, isFetching, hasError } = useFetchApi(MOVIES_ENDPOINT);

	if (hasError) {
		return <Error />;
	}

	if (isFetching) {
		return <Loading />;
	}

	return (
		<Container maxWidth='lg'>
			<NavBar movies={movies}/>
			<MovieList movies={movies} />
			<GenreMenu movies={movies} />
		</Container>
	);
}

export default Home;
