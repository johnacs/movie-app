import React from 'react';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useMovies } from '../MovieContext';
import { Container, Typography } from '@material-ui/core';

function Home() {
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
