import React from 'react';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Error from '../components/Error';
// import useFetchApi from '../utilities/fetchApi';
import { useMovies } from '../MovieContext';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// const MOVIES_ENDPOINT = 'https://sometimes-maybe-flaky-api.gdshive.io/';

function Home() {
	// const { movies, isFetching, hasError } = useFetchApi(MOVIES_ENDPOINT);
	const { movies, hasError, isFetching } = useMovies();

	if (hasError) {
		return <Error />;
	}

	if (isFetching) {
		return <Loading />;
	}

	return (
		<Container maxWidth='lg'>
			<MovieList movies={movies} />
		</Container>
	);
}

export default Home;
